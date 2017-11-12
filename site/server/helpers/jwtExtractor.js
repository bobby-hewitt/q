module.exports = function(req){
	if (req && req.headers && req.headers.jwt){
		return req.headers.jwt.toString()
	}

}