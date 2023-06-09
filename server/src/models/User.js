const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
 	location: String,
	email: String,
	status: String,
	dob: Date,
	contact: String,
	picture: String,
})

const User = mongoose.model('User', UserSchema)
module.exports = User;
