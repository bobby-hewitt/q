var express = require('express');
var router = express.Router();
var passport = require('passport');
const authenticateRequest = require('../helpers/authenticateRequest')

router.get('/events', function (req, res, next) {
	Event.find({}, function(err, events) {
		for(var i  = 0; i < events.length; i++){
			//nullify rsvps so public do not get this data
			//send response
		}
  	})
})
 
module.exports = router;