module.exports = function(arguments){
	console.log(arguments, 'sdfsdfsdfffdsjkdnfdjklfsdflksdnfksldfjdslkfjsdfklsjfklsjfklsdjfsdklfj')
	return new Promise((resolve, reject) => {
		
		let snippet = '<tr><td colspan="2" class="container callToButton" style="border-top: 1px solid #eeeeee; background: url(images/body_remote.png); background-size: cover; min-height: 500px; padding: 30px; padding-bottom: 0; width: 100%; line-height: 24px;">'
		for (var i =0; i < arguments[0].length; i++){
			snippet += '<img src="https://i.imgur.com/XC515ER.png"> ' + ' ' + arguments[0][i] + '<br/>'  
		}

		snippet += '<img src="https://i.imgur.com/XC515ER.png"> Gigabit Internet<br/>'    
		snippet +='<br /> <strong>Cart total:</strong><br/><br/> <span style="font-size: 44px; font-weight: 800;">$'+ arguments[1] + '/mo</span><br />'             
		resolve(snippet)
	})
}


