const geocoder = require('geocoder')

module.exports = function(postcode){
	console.log('geocoding', postcode)
	return new Promise((resolve, reject) => {
		geocoder.geocode(postcode, function ( err, data ) {
		  if (err) reject('could not find address')
		  else resolve(data.results[0].geometry.location)
		});
	})
}