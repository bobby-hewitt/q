// arguments:
//[0] ['lines', 'of', 'text']
//[1] bool showCartOverview
//[2] [productsList]


module.exports = function(arguments){
	console.log(arguments)
	return new Promise((resolve, reject) => {
		let snippet = '<tr class="content"><td class="contentBody container" style="padding: 35px 30px 0px 30px; line-height: 24px;"><p style="width: 100%; font-size:15px;">'
		for (var i = 0; i < arguments[0].length; i++){
			snippet += arguments[0][i]
			snippet += '<br/><br/>'
		}
		snippet +='</p>'
		if (arguments[1] && arguments[1].length){
			for (var i = 0; i < arguments[1].length; i ++){
				snippet += '<img src="https://i.imgur.com/XC515ER.png"> ' +  arguments[1][i] + '<br/>'
			}  
			snippet +='<br /> <strong>Cart total:</strong><br/><br/> <span style="font-size: 44px; font-weight: 800;">' + arguments[2] + '/mo</span><br />'             
		}
		snippet += ' </td> </tr>' 
		resolve(snippet)
	})
}