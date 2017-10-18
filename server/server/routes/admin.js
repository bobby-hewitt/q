var express = require('express');
var router = express.Router();
var passport = require('passport');
const User = require('../models/user')
const email = require('../email')
const crypto = require('crypto')

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

 
module.exports = router;