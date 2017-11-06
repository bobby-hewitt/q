var express = require('express');
var router = express.Router();
var User = require('../models/user')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const authenticateRequest = require('../helpers/authenticateRequest')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const async = require('async')
let email = require('../email')

/* GET users listing. */
router.post('/register', function (req, res) {
  console.log('reqBoy',req.body)
  let user = {
    email: req.body.email, 
    avatarUrl: req.body.avatarUrl,
    name: req.body.name
  }
  User.register(new User(user), req.body.password, function (err, user) {
    if (err) {
      return res.status(400).send({ error: 'Email address in use.' })
    } else {
      console.log(user)
      email('awaiting-approval', user)
      console.log('registered user successfully, email: ', req.body.email)
      res.status(200).send({ user: user.id });
    }
  });
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      console.log('ERROR LOGGING IN ', err)
      return next(err);
    }
    if (!user) {
      console.log('invalid')
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      let userToSend = Object.assign({}, user);
      delete userToSend._doc.salt
      delete userToSend._doc.hash
      console.log('USER TO SEND ', userToSend)
      console.log('should log in')
      var token = jwt.sign({ id: user._id, email: user.email}, process.env.PW_SECRET);
      return res
        .status(200)
        .json({ token, user: userToSend });
    }
  })(req, res, next);
});

router.post('/authenticateWithJWT', function (req, res, next) {
  console.log('auth with')
  authenticateRequest(req, res, next).then((user) => {
    res.send(user)
  })
  .catch((err) => {
     return res.status(401).json({ error: 'Invalid credentials.' });
    console.log('error authenticating', err)
  })
});


router.post('/passwordResetRequest', function(req, res, next){
  console.log('recieved reset req')
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          return res.status(401).send('No account with that email address exists.')
        // } else if (!user.isApproved && !user.isAdmin){
        //   return res.status(401).send('Your account has not yet been approved')
        } else {
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 900000; // 1 hour
          user.save(function(err) {
            done(err, token, user);
          });
        }
      });
    },
    function(token, user, done) {
      let emailData = {
        user,
        token
      }
      console.log('sneding email in routes')
      email('password-reset', emailData)
      res.send('reset password email sent successfully.')
    }
  ]);
})


router.get('/reset', function(req, res, next){
   User.findOne({ resetPasswordToken: req.query.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      console.log('no user found')
      return res.json({userFound: false})
    }
      return res.json({userFound: true})
  });
})

router.post('/reset', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return res.json({userFound: false, passwordsMatch: false, passwordReset: false})
        }
        if(req.body.password === req.body.confirmPassword) {
          console.log('got as far as matching passwords')
          user.setPassword(req.body.password, function(err) {
            console.log('in set password function')
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.save(function(err) {
              done(err, user);
            });
          })
        } else {
            //passwords do not match
            return res.json({userFound: true, passwordsMatch: false, passwordReset: false})
        }
      });
    }], function(err) {
    return res.json({userFound: true, passwordsMatch: true, passwordReset: true})
  });
});

module.exports = router;

