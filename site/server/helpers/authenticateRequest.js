var passport = require('passport');

module.exports = function(req,res,next){
	return new Promise ((resolve, reject) => {
		console.log("AUTHENTICATING")
		passport.authenticate('jwt', function (err, user, info) {
		    if (err) {
		    	console.log('err', err)
		      	reject({error: err})
		    }
		    if (!user) {
		    	console.log('no user found')
		     	reject({ error: 'Invalid credentials.' });
		    }
		    if (user) {
		     	resolve(user)
		    }
  		})(req, res, next);
	});
}