const express = require('express');
const bodyParser = require('body-parser');
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
res.send(
	[
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
		}
	]
)
})

app.listen(process.env.PORT || 8081);
