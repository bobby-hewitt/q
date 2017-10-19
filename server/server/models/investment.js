var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
 
var Investment = new Schema({
	title: '',
	imageUrl: '',
	videoUrl: ''
});
 
var Investment = module.exports = mongoose.model('Investment', Investment);