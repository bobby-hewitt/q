const geocoder = require('geocoder')

module.exports = function(postcode){
	console.log('geocoding', postcode)
	return new Promise((resolve, reject) => {
		geocoder.geocode(postcode, function ( err, data ) {
		  if (err) reject('could not find address')
		  else if (data && data.results && data.results[0] && data.results[0].geometry && data.results[0].geometry.location){
		  	resolve(data.results[0].geometry.location)
		  } else {
		  	reject('could not find address')
		  }
		});
	})
}