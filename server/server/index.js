// username: q-ventures-developer
//pw: Admin

//imports
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const User = require('./models/user')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const indexRoute = require('./routes/index');
const publicRoute = require('./routes/public');
const userRoute = require('./routes/user')
const uploadRoute = require('./routes/upload')
const bodyParser = require('body-parser')
const adminRoute = require('./routes/admin')
require('dotenv').config({path: '.env'})
const jwtExtractor = require('./helpers/jwtExtractor')
const aws = require('aws-sdk');
const authenticateRequest = require('./helpers/authenticateRequest')
//initialize
const PORT = process.env.PORT || 9000
app.listen(PORT, function () {
  console.log('App listening on port 9000!')
})
//set up routes and protect them.
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cors())
app.use('/api/user', userRoute);
app.use('/api/', indexRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/admin', function(req,res,next){
  authenticateRequest(req, res, next).then((user) => {
    if (user.isAdmin){
      next()
    } else {
      return res.status(401).send({isAdmin: false})
    }
  })
  .catch(() => {
    return res.status(401).send({isAdmin: false})
  })
}, adminRoute)
//set up mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL,  {useMongoClient: true});
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
});
mongoose.connection.on('connected', function() {
    console.info('Successfully connected to the database')
});
let myAWSCredentials = {
  "AWSAccessKeyId":process.env.AWSAccessKeyId,
  "AWSSecretKey":process.env.AWSSecretKey
}
//set up AWS connection
aws.config.loadFromPath('./server/awsconfig.json');
//configure passport
const options = {
 jwtFromRequest: jwtExtractor,
 passReqToCallback: true,
 secretOrKey: process.env.PW_SECRET
}
// Configure Passport to use local strategy for initial authentication.
passport.use('local', new LocalStrategy(User.authenticate()));
// Configure Passport to use JWT strategy to look up Users.
passport.use('jwt', new JwtStrategy(options, function(jwt_payload, user, done) {
    console.log('JWT PAYLOAD', user.email)
    User.findOne({email: user.email}, function(err, user) {
        if (err) {
            console.log('an error occured during JWT extraction', err)
            return done(err, false);
        }
        if (user) {
            console.log('user with corresponding email found')
            return done(null, user);
        } else {
          console.log('no user found')
            return done(null, false);
        }
    });
}));


setBobbyAsAdmin()

function setBobbyAsAdmin(){
   User.findOne({email: 'bobbyhewitt@hotmail.co.uk'}, function(err, user) {
      user.isAdmin = true;
      user.save(function(err) {
        if(err){
          console.log('error setting admin' , err)
        } else {
          console.log('Bobby set as admin', user)
        }
      })
  })
}