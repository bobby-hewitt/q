const createFullWidthImage = require('./emailComponents/createFullWidthImage')
const createButton = require('./emailComponents/createButton')
const createBody = require('./emailComponents/createBody')
const createFooter = require('./emailComponents/createFooter')
const createHeader = require('./emailComponents/createHeader')

module.exports = function(data){
	return new Promise((resolve, reject) => {
		let emails = []
		const head = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <title>Single-Column Responsive Email Template</title> </head> <body style="margin:0; padding:0"> <!--[if (gte mso 9)|(IE)]> <table align="center" cellpadding="0" cellspacing="0" border="0"> <tr> <td> <![endif]--> <table style="font-family: sans-serif"class="main" align="center" cellpadding="0" cellspacing="0" border="0" style="">'
		const end = '</html>'
		let body = ''
	
		selectComponents(data).then((elements) => {
			Promise.all(elements).then((finalElements)=> {
				console.log(finalElements)
				for (var i = 0; i < finalElements.length; i++){
					console.log('in loop')
					body += finalElements[i]
				}
				let final = head + body + end
				emails.push(final)
				
					resolve(final)
			})
		})
		
	})
}

function constructConstructors(data){
	return new Promise((resolve, reject) => {
		switch(data.type){
			case 'header':
			return resolve(
				createHeader()
			)
			case 'fullWidthImage':
			return resolve(
				createFullWidthImage([data.content.src, data.content.copy, data.content.color])
			)
			case 'button':
			return resolve(
				createButton(['rgb(205,4,11)', 'rgb(252,240,241)', data.content.copy, data.content.url])
			)
			case 'body':
			return resolve(
				createBody([data.content.copy])
			)
			case 'footer':
			return resolve(
				createFooter([])
			)
			default: 
				return
		}
	})
}

function selectComponents(components){
	console.log('SELECTING COMPONENTS')
	
	let elements = []
	for (var i = 0; i < components.length; i++){
		let element = constructConstructors(components[i])
		elements.push(element)
	}


	return new Promise((resolve, reject) => {
		resolve(elements)
	// 	elements.push(header)
	// 	elements.push(fullWidthImage)
	// 	elements.push(body)
	// 	elements.push(button)
	// 	elements.push(footer)
	// 	resolve(elements)	
	})
}