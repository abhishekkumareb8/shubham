var User = require("../models/User");

module.exports.controller = (app) => {
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
    delete req.query['sort'];
    delete req.query['order'];
    delete req.query['page'];
    if(sort && order && page) {
      sortQuery[sort] = order;
    } else {
      sortQuery = { '_id': -1 }
    }
    const value = Object.values(req.query)[0] || '';
    const filter = Object.keys(req.query)[0] || '';
    const filterQuery = [];
    if(filter && filter == 'any' && value == '') {
      query = {}
    } else if(filter && filter == 'any') {
      query = { $or: filterQuery }
      filterQuery.push({ name: { $regex: value, '$options': 'i' } })
      filterQuery.push({ location: { $regex: value, '$options': 'i' } })
      filterQuery.push({ email: { $regex: value, '$options': 'i' } })
      filterQuery.push({ status: { $regex: value, '$options': 'i' } })  
    } else if(filter && value && !page) {
      query = { $or: filterQuery }
      const queryString = {}
      queryString[filter] = { $regex: value, '$options': 'i' }
      filterQuery.push(queryString);
    } else {
      query = {}
    }
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
