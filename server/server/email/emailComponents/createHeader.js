module.exports = function(){
	return new Promise((resolve, reject) => {
		let snippet = '<tr class="nav" style="width: 100%;height: 70px;" ><td style="background: url(https://i.imgur.com/Hc9fJMt.png) no-repeat; background-position: left; background-position-x: 30px; width: 20%; border-bottom: 1px #d9dbdb solid; border-right: 1px #efefef solid;"></td></tr>'
		resolve(snippet)
	})
}