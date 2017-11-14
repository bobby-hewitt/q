var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = new Schema({
	name: '',
	date: '',
	time: '',
	imageUrl: '',
	description: '',
	addressLine1: '',
	addressLine2: '',
	addressLine3: '',
	postcode: '',
	latlng: '',
	attendees:[]
});
 
var Event = module.exports = mongoose.model('Event', Event);