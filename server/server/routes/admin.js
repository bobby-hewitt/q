var express = require('express');
var router = express.Router();
var passport = require('passport');
const User = require('../models/user')
const Investment = require('../models/investment')
const Event = require('../models/Event')
const email = require('../email')
const crypto = require('crypto')
const geocode = require('../helpers/geocode')
router.get('/authenticate', function (req, res, next) {
	res.send('success')
})

router.get('/users', function(req, res, next){
 	User.find({}, function(err, users) {
	res.json(users)
  })
})

router.post('/approveUser/:id', function(req,res,next){
	   User.findOne({_id: req.params.id}, function(err, user) {
	   		let resetToken;
	   		crypto.randomBytes(20, function(error, buf) {
			token = buf.toString('hex');
			user.isApproved = true;
			user.resetPasswordToken = token
			user.resetPasswordExpires = Date.now() + (1000 * 60 * 60 * 24 * 7)
			user.save(function(err) {
				if(err){
					console.log('error setting admin' , err)
				} else {
					let emailData = {
						token,
						user
					}
					email('user-approved', emailData)
					User.find({}, function (err, users) {
						console.log(user)
						res.json(users)
					})
				}
			})
    	})
  	})
})

router.post('/rejectUser/:id', function(req,res,next){
	console.log(req.params)	
})

router.post('/addInvestment', function(req,res,next){
	console.log(req.body)
	Investment.create({
		title: req.body.investmentTitle,
		imageUrl: req.body.newInvestmentImageUrl,
		videoUrl: req.body.investmentVideo
	}, function (err, investment) {
		console.log(investment)
	  if (err) return res.status(400).send('error saving investment');
	  else return res.status(200).send('success adding investment')
	})
})

router.get('/getInvestments', function(req,res,next){
	Investment.find({}, function(err, users) {
		res.json(users)
  	})	
})

router.post('/addEvent', function(req,res,next){
	//event infromation
	let obj = {
		name: req.body.name,
		date: req.body.date,
		time: req.body.time,
		description: req.body.description,
		addressLine1: req.body.addressLine1,
		addressLine2: req.body.addressLine2,
		addressLine3: req.body.addressLine3,
		postcode: req.body.postcode,
	}

	if (req.body.id && req.body.id.match(/^[0-9a-fA-F]{24}$/)) {
  		//Update an existing event
		Event.findOne({_id: req.body.id}, function(err, event) {
			if (err) return res.status(500).send('could not match object Id.  Have you deleted this event?')
		
			geocode(req.body.addressLine1 + ' ' +req.body.postcode)
			.then((result) => {
				updateEvent(result)
			})
			.catch((err) => {
				updateEvent(null)
			})

			function updateEvent(latlng){
				let keys = Object.keys(obj) 
				console.log()
				for (var i = 0; i < keys.length; i++){
					event[keys[i]] = obj[keys[i]]
					console.log(obj[keys[i]])
					console.log(event[keys[i]])
				}
				event.latlng = latlng;
				event.save(function(err) {
					if(err) return res.status(500).send('error overwriting existing event')
					return res.status(200).send('success overwriting event')
				})
			}
		})	
	} else {
		// Create event if this is a new event
		geocode(req.body.addressLine1 + ' ' +req.body.postcode)
		.then((result) => {
			createEvent(result)
		})
		.catch((err) => {
			createEvent(null)
		})
		function createEvent(latlng){
			obj.latlng = latlng
			Event.create(obj, function (err, event) {
				console.log('EVENT ', event)
				if (err) return res.status(400).send('error creating event');
				else return res.status(200).send('success adding event')
			})
		}		
	}
})

router.post('/deleteEvent', function(req,res,next){
	console.log(req.body.eventId)
	Event.find({_id: req.body.eventId}).remove(function(err, result){
		if (err) { return res.status(500).send('error deleting event')}
		else {
			Event.find({}, function(err, events) {
				if (err) { return res.status(500).send('error getting events after deleting')}
				res.status(200).send(events)
		  	})
		}
	})
})

router.get('/editEvent/:id', function(req,res,next){
	console.log(req.params)
	Event.findOne({_id: req.params.id}, function(err, result){
		if (err) { 
			console.log('error getting event')
			return res.status(500).send('error finding event')
		}	else {
			console.log(result)
			return res.status(200).json(result)	
		}
			
	})
})

router.get('/events', function(req,res,next){
	Event.find({}, function(err, events) {
		res.json(events)
  	})
})

 
module.exports = router;