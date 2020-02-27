const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const fs = require('fs');
const config = require('./config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.DB, 
	{ 
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, function() {
  console.log('Connection has been made');
})
.catch(err => {
  console.error('App starting error:', err.stack);
  process.exit(1);
});

// Include controllers
fs.readdirSync(__dirname + "/controllers").forEach(function (file) {
  if(file.substr(-3) == ".js") {
    const route = require("./controllers/" + file)
    route.controller(app)
  }
})

app.get('/', (req, res) => {
	res.send(
		[{
			message: "All Good from Backend!",
			}]
	)
})

app.listen(process.env.PORT || 8081);
