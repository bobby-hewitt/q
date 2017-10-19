var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = new Schema({
	name: '',
	date: '',
	time: '',
	description: '',
	addressLine1: '',
	addressLine2: '',
	addressLine3: '',
	postcode: '',
	latlng: '',
});
 
var Event = module.exports = mongoose.model('Event', Event);