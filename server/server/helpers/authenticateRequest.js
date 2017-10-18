var passport = require('passport');

module.exports = function(req,res,next){
	return new Promise ((resolve, reject) => {
		passport.authenticate('jwt', function (err, user, info) {
		    if (err) {
		      	reject({error: err})
		    }
		    if (!user) {
		     	reject({ error: 'Invalid credentials.' });
		    }
		    if (user) {
		     	resolve(user)
		    }
  		})(req, res, next);
	});
}