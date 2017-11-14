var express = require('express');
var router = express.Router();
var passport = require('passport');
const User = require('../models/user')
const Investment = require('../models/investment')
const Event = require('../models/Event')
const email = require('../email')
const crypto = require('crypto')
const geocode = require('../helpers/geocode')

router.get('/members', function(req, res, next){
	let paramObj = {isApproved: true}
	if (req.query.search){
		paramObj = {isApproved: true, "name" : {$regex :  new RegExp(req.query.search, "i") }}
	} 
 	User.find(paramObj, function(err, members) {
	res.json(members)
  })
})

router.get('/investments', function(req,res,next){
	console.log(req.query)
	let paramObj = {}
	let keys = Object.keys(req.query)
	console.log(keys)
	for (var i = 0; i < keys.length; i++){
		paramObj[keys[i]] = {$regex :  new RegExp(req.query[keys[i]], "i") }
	}
	console.log(paramObj)
	Investment.find(paramObj, function(err, investments) {
		if (err) return res.status(500).send('Error fetching investments')
		res.json(investments)
  	})	
})

router.get('/events', function(req,res,next){
	let paramObj = {}
	console.log(req.query.search)
	if (req.query.search){
		paramObj = {"name" : {$regex :  new RegExp(req.query.search, "i") }}
	} 
	Event.find(paramObj, function(err, events) {
		res.json(events)
  	})
})

router.post('/rsvp', function(req,res,next){
	console.log('rsvp',req.body)
	let {eventId, userId} = req.body
	//find user and check to see if already an attendee
  	User.findOne({_id: req.body.userId}, function(err, user) {
  		let evtInd = user.events.indexOf(eventId)
		if (evtInd > -1){
			removeUserFromEvent()
			user.events.splice(evtInd, 1)
			res.json(user)
			user.save()
			console.log('USER EVENTS', user.events)
			return
		} else {
			addUserToEvent()
			user.events.push(eventId)
			res.json(user)
			user.save()
			console.log('USER EVENTS', user.events)
			return
		}
  	})

  	function removeUserFromEvent(){
  		Event.findOne({_id: req.body.eventId}, function(err, event) {
  			let userInd = event.attendees.indexOf(userId)
  			event.attendees.splice(userInd,1)
			event.save()
			console.log('EVENT ATTENDEES', event.attendees)
			return
	  	})
  	}

  	function addUserToEvent(){
		Event.findOne({_id: req.body.eventId}, function(err, event) {
			event.attendees.push(userId)
			event.save()
			console.log('EVENT ATTENDEES', event.attendees)
			return
	  	})
  	}	
})

module.exports = router;