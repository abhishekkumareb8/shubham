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
    const sort = req.query.sort;
    const order = req.query.order;
    let sortQuery = {}
    if(sort && order && page) {
      sortQuery[sort] = order
      delete req.query['sort'];
      delete req.query['order'];
      delete req.query['page'];
    } else {
      sortQuery = { '_id': -1 }
    }
    const value = Object.values(req.query)[0] || '';
    const filter = Object.keys(req.query)[0] || '';
    const filterQuery = []
    if(filter && filter == 'any' && value == '') {
      console.log('aaaaaaaaaa')
      query = {}
    } else if(filter && filter == 'any') {
      console.log('bbbbbbbbb')
      query = { $or: filterQuery }
      filterQuery.push({ name: { $regex: value, '$options': 'i' } })
      filterQuery.push({ location: { $regex: value, '$options': 'i' } })
      filterQuery.push({ email: { $regex: value, '$options': 'i' } })
      filterQuery.push({ status: { $regex: value, '$options': 'i' } })  
    } else if(filter && value && !page) {
      console.log('cccccccccccc')
      query = { $or: filterQuery }
      const queryString = {}
      queryString[filter] = { $regex: value, '$options': 'i' }
      filterQuery.push(queryString);
    } else {
      console.log('dddddddddddd')
      query = {}
    }
    console.log(query);
    User.find(query, 'name location email status dob contact picture', { skip: perPage * (page-1), limit: perPage, sort: sortQuery }, function (error, users) {
      if (error) { console.log(error); }
      
      User.countDocuments(query).exec((error, count) => {
        console.log(count)
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
