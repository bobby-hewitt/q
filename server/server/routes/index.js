var express = require('express');
var router = express.Router();
var passport = require('passport');
const authenticateRequest = require('../helpers/authenticateRequest')

router.post('/protected', function (req, res, next) {
	console.log('in protected route')
  authenticateRequest(req, res, next).then((user) => {
  	res.send(user)
  })
  .catch((err) => {
  	console.log('error authenticating')
  })
})

 
module.exports = router;