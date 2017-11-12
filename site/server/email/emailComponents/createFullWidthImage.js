module.exports = function(arguments){
	return new Promise ((resolve, reject) => {
		resolve( '<tr style="background: url(' + arguments[0] + '); background-size: cover; background-position:center; height: 400px; box-sizing: border-box; vertical-align: top;"><td><h1 style="font-family: sans-serif; font-size: 36px; color:' + arguments[2] + '; font-weight:bold; line-height: 50px; max-width: 400px; padding: 0px 0 0 30px;">' + arguments[1] + '</h1></td></tr>')
	})
}