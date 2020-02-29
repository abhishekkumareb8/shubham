var User = require("../models/User");

module.exports.controller = (app) => {
  // fetch all users
  app.get("/people", function(req, res) {
    let page = parseInt(req.query.page) || 1;
    let perPage = 7;
    let response = {};
    User.find({}, 'name location email status dob contact picture', { skip: perPage * (page-1), limit: perPage, sort: { '_id': -1 } }, function (error, users) {
      if (error) { console.log(error); }
      
      User.countDocuments().exec((error, count) => {
        if (error) {
          return res.json(count_error);
        }

        response = {
          meta: {
            total: count,
            page: page,
            per_page: perPage
          },
          people: users
        }
        res.send(response)
      });
    })
  })

  // add a new user
  app.post('/users', (req, res) => {
    const user = new User({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      status: req.body.status,
      dob: req.body.dob,
      contact: req.body.contact,
      picture: req.body.picture
    })
    user.save(function (error, user) {
      if (error) { console.log(error); }
      res.send(user)
    })
  })

  // search users
  app.get('/search', (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let perPage = 7;
    let response = {};
    let query;
    const value = Object.values(req.query)[0] || '';
    const filter = Object.keys(req.query)[0] || '';
    const filterQuery = []
    if(filter && filter == 'any' && value == '') {
      query = {}
    } else if(filter && filter == 'any') {
      query = { $or: filterQuery }
      filterQuery.push({ name: { $regex: value, '$options': 'i' } })
      filterQuery.push({ location: { $regex: value, '$options': 'i' } })
      filterQuery.push({ email: { $regex: value, '$options': 'i' } })
      filterQuery.push({ status: { $regex: value, '$options': 'i' } })  
    } else {
      query = { $or: filterQuery }
      const queryString = {}
      queryString[filter] = { $regex: value, '$options': 'i' }
      filterQuery.push(queryString);
    }
    console.log(JSON.stringify(query))
    User.find(query, 'name location email status dob contact picture', { skip: perPage * (page-1), limit: perPage, sort: { '_id': -1 } }, function (error, users) {
      if (error) { console.log(error); }
      
      User.countDocuments(query).exec((error, count) => {
        if (error) {
          return res.json(error);
        }

        response = {
          meta: {
            total: count,
            page: page,
            per_page: perPage
          },
          people: users
        }
        res.send(response)
      });
    })
  })
}
