const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send(
		[{
			message: "All Good from Backend!",
			}]
	)
})

app.get('/people', (req, res) => {
	let page = req.query.page;
	let response = {};
	if (!page || page == 1) {
		response = {
			meta: {
				total: 16,
				page: 1,
				per_page: 7
			},
			people: [
				{
					name: 'Anita Sharma',
					location: 'Kathmandu',
					status: 'Discarded',
					email: 'get.aneeta@gmail.com'
				},
				{
					name: 'Nelson Smith',
					location: 'Waterford',
					status: 'Employed',
					email: 'nelson.smith@example.com'
				},
				{
					name: 'Lynn Foster',
					location: 'Waterford',
					status: 'Employed',
					email: 'lynn.foster@example.com'
				},
				{
					name: 'Darryl Simpson',
					location: '3706 Cackson St',
					status: 'Employed',
					email: 'darryl.simpson@example.com'
				},
				{
					name: 'Walter Sutton',
					location: '6649 Robinson Rd',
					status: 'Discarded',
					email: 'walter.sutton@example.com'
				},
				{
					name: 'Mabel Carter',
					location: '732 W Gray St',
					status: 'Employed',
					email: 'mabel.carter@example.com'
				},
				{
					name: 'Sally Richards',
					location: '4668 Pockrus Page Rd',
					status: 'Employed',
					email: 'sally.richards@example.com'
				}
			]
		}
	} else if (page == 2) {
		response = {
			meta: {
				total: 16,
				page: 2,
				per_page: 7
			},
			people: [
				{
					name: 'Anita Sharma',
					location: 'Kathmandu',
					status: 'Discarded',
					email: 'get.aneeta@gmail.com'
				},
				{
					name: 'Nelson Smith',
					location: 'Waterford',
					status: 'Employed',
					email: 'nelson.smith@example.com'
				},
				{
					name: 'Lynn Foster',
					location: 'Waterford',
					status: 'Employed',
					email: 'lynn.foster@example.com'
				},
				{
					name: 'Darryl Simpson',
					location: '3706 Cackson St',
					status: 'Employed',
					email: 'darryl.simpson@example.com'
				},
				{
					name: 'Walter Sutton',
					location: '6649 Robinson Rd',
					status: 'Discarded',
					email: 'walter.sutton@example.com'
				},
				{
					name: 'Mabel Carter',
					location: '732 W Gray St',
					status: 'Employed',
					email: 'mabel.carter@example.com'
				},
				{
					name: 'Darrell Sanchez',
					location: '4376 First Street',
					status: 'Employed',
					email: 'darrell.sanchez@example.com'
				}
			]
		};
	} else if (page == 3) {
		response = {
			meta: {
				total: 16,
				page: 3,
				per_page: 7
			},
			people: [
				{
					name: 'Mabel Carter',
					location: '732 W Gray St',
					status: 'Employed',
					email: 'mabel.carter@example.com'
				},
				{
					name: 'Darrell Sanchez',
					location: '4376 First Street',
					status: 'Employed',
					email: 'darrell.sanchez@example.com'
				}
			]
		};
	}
	res.send(
		response
	)
})

app.listen(process.env.PORT || 8081);
