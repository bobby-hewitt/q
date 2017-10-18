var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
 
var User = new Schema({
	resetPasswordToken: '',
	resetPasswordExpires: '',
	isAdmin: false,
	isApproved: false,
	avatarUrl: ''
});
 
// See passport-local-mongoose docs for schema customization options
// https://github.com/saintedlama/passport-local-mongoose#options
User.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameUnique: true
});
 
var User = module.exports = mongoose.model('User', User);