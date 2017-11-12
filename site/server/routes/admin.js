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

router.get('/applicants', function(req, res, next){
	let paramObj = {isApproved: {$ne: true}}
	if (req.query.search){
		paramObj = {isApproved: {$ne: true}, "name" : {$regex :  new RegExp(req.query.search, "i") }}
	} 
 	User.find(paramObj, function(err, applicants) {
	res.json(applicants)
  })
})

router.get('/members', function(req, res, next){
	let paramObj = {isApproved: true}
	if (req.query.search){
		paramObj = {isApproved: true, "name" : {$regex :  new RegExp(req.query.search, "i") }}
	} 
 	User.find(paramObj, function(err, members) {
	res.json(members)
  })
})

router.get('/administrators', function(req, res, next){
 	User.find({isAdmin: true}, function(err, administrators) {
 		console.log(administrators)
 	if (err) return res.status(500).send({error: 'Could not get administrators'})
 	else {
 		res.json(administrators)
 	}
  })
})

router.get('/user/:id', function(req, res, next){
	console.log(req.params.id)
 	User.findOne({_id: req.params.id}, function(err, member) {
		if (err) {
			res.status(500).send({error: 'Error fetching user'})
		} else {
			res.status(200).send(member)
		}
  })
})

router.post('/revokeMembership/:id', function(req,res,next){
	console.log(req.params)
	User.findOne({_id: req.params.id}, function(err, user) {
		user.remove(function(err, result){
			if (err) return res.status(500).send({error: 'Could not remove user'})
			else {
				User.find({isApproved: true}, function (err, members) {
					if (err){
						return res.status(500).send('Error searching applicants in db')
					}
					res.json(members)
				})
			}
		})
	})	
})

router.get('/removeAdminRights/:id', function(req,res,next){
	   User.findOne({_id: req.params.id}, function(err, user) {
			user.isAdmin = false;

			user.save(function(err) {
				if(err){
					res.status(500).send({error: 'Error revoking admin rights'})
				} else {	
					User.find({isAdmin: true}, function (err, applicants) {
						if (err) return res.status(500).send({error: 'Could not find admin users'})
						res.json(applicants)
					})
				}
			})
    	})
})

router.get('/makeAdmin/:id', function(req,res,next){
	console.log('makinf admin')
	   User.findOne({_id: req.params.id}, function(err, user) {
			user.isAdmin = true;
			console.log('making admin')
			user.save(function(err) {
				if(err){
					res.status(500).send({error: 'Error revoking admin rights'})
				} else {	
					User.find({isAdmin: true}, function (err, applicants) {
						if (err) return res.status(500).send({error: 'Could not find admin users'})
							console.log('SENDING', applicants)
						res.json(applicants)
					})
				}
			})
    	})
})




router.post('/approveApplicant/:id', function(req,res,next){
	   User.findOne({_id: req.params.id}, function(err, user) {
	   		let resetToken;
	   		crypto.randomBytes(20, function(error, buf) {
			token = buf.toString('hex');
			user.isApproved = true;
			user.resetPasswordToken = token
			user.resetPasswordExpires = Date.now() + (1000 * 60 * 60 * 24 * 7)
			user.save(function(err) {
				if(err){
					console.log('error approving application' , err)
					res.status(500).send({error: 'Error approving applicant'})
				} else {
					let emailData = {
						token,
						user
					}
					email('user-approved', emailData)
					User.find({isApproved: {$ne: true}}, function (err, applicants) {
						res.json(applicants)
					})
				}
			})
    	})
  	})
})

router.post('/rejectApplicant/:id', function(req,res,next){
	User.findOne({_id: req.params.id}, function(err, user) {
		console.log(user)
		email('user-rejected', user)
		user.remove(function(err, result){
			if (err) console.log(err)
			else {
				User.find({isApproved: {$ne: true}}, function (err, applicants) {
					if (err){
						return res.status(500).send('Error searching applicants in db')
					}
					res.json(applicants)
				})
			}
		})
	})	
})







router.post('/addInvestment', function(req,res,next){
	console.log(req.body)
	let obj = {
		 _id: req.body.id,
		title: req.body.title,
		imageUrl: req.body.imageUrl,
		videoUrl: req.body.videoUrl,
		files: req.body.files,
		updates: req.body.updates,
		financeTarget: req.body.financeTarget,
		financePreMoneyVal: req.body.financePreMoneyVal,
		financeRevenue: req.body.financeRevenue,
		financeComittedFunds:req.body.financeComittedFunds,
		financeMinimumInvestment: req.body.financeMinimumInvestment,
		description: req.body.description,
		feature1: req.body.feature1,
		feature2: req.body.feature2,
		feature3: req.body.feature3,
	}

	if (req.body.id && req.body.id.match(/^[0-9a-fA-F]{24}$/)) {
		console.log('ID FOUND')
		Investment.findOne({_id: req.body.id}, function(err, investment) {
			if (err) return res.status(500).send('could not match object Id.  Have you deleted this investment?')
			let keys = Object.keys(obj) 
			for (var i = 0; i < keys.length; i++){
				investment[keys[i]] = obj[keys[i]]
			}
			investment.save(function(err) {
				if(err) return res.status(500).send('error overwriting existing investment')
				return res.status(200).send('success overwriting investment')
			})
		})
	}
	else {
		console.log('ID NOT FOUND')
		Investment.create({
			title: req.body.title,
			imageUrl: req.body.imageUrl,
			videoUrl: req.body.videoUrl
		}, function (err, investment) {
		  if (err) return res.status(400).send('error saving investment');
		  else return res.status(200).send('success adding investment')
		})
	}
})











//".*" + req.query.search + ".*"


router.get('/getInvestments', function(req,res,next){
	let paramObj = {}
	if (req.query.search){
		paramObj = {"title" : {$regex :  new RegExp(req.query.search, "i") }}
	} 
	Investment.find(paramObj, function(err, users) {
		if (err) return res.status(500).send('Error fetching users')
		console.log(users)
		res.json(users)
  	})	
})

router.get('/editInvestment/:id', function(req,res,next){
	console.log('here', req.params)
	Investment.findOne({_id: req.params.id}, function(err, result){
		if (err) { 
			console.log('error getting event')
			return res.status(500).send('error finding event')
		}	else {
			console.log(result)
			return res.status(200).json(result)	
		}	
	})
})

router.post('/deleteInvestment', function(req,res,next){
	console.log('DELETING INVESTMNET ', req.body.investmentId)
	Investment.find({_id: req.body.investmentId}).remove(function(err, result){
		if (err) { return res.status(500).send('error deleting event')}
		else {
			Investment.find({}, function(err, investments) {
				if (err) { return res.status(500).send('error getting events after deleting')}
				res.status(200).send(investments)
		  	})
		}
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
	let paramObj = {}
	console.log(req.query.search)
	if (req.query.search){
		paramObj = {"name" : {$regex :  new RegExp(req.query.search, "i") }}
	} 
	Event.find(paramObj, function(err, events) {
		res.json(events)
  	})
})

 
module.exports = router;