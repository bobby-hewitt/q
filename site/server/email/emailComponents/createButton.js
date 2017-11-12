//arguments => 'color', 'textColor', 'text', 'url'

module.exports = function(arguments){
	return new Promise((resolve, reject) => {

		let snippet = '<tr class="callToButton" style="margin: 10px 0px;"><td style="padding: 0px 30px"><a href="'
		snippet += arguments[3]
		snippet += '" class="iconForward iconForwardWhite" style="font-family: verizonThin, sans-serif; font-size: 20px; font-weight:bold;text-align: center;line-height: 24px; display: inline-block; vertical-align: middle; position: relative; padding-right: 2.6em; color:'
		snippet += arguments[1]
		snippet += '; background: ' 
		snippet += arguments[0]
		snippet +='; font-size: 14px;   padding: 15px 20px 15px 20px; margin:30px 0px;width: 100%; max-width:250px; box-sizing: border-box; text-decoration: none;">'
		snippet += arguments[2]
		snippet += '</a></td></tr>' 


		resolve(
			snippet
		)
	})
}