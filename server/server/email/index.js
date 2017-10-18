createEmail = require('./createEmail')
sendEmail = require('./sendEmail')

module.exports = function(action, data){
	switch(action){
		case 'password-reset':
			return constructPasswordReset(data, 'Reset your password')

		case 'user-approved':
			return constructUserApproved(data, "You've been approved")
		default:
		console.log('returned default in switch')
			return
	}
}

function constructPasswordReset(data, subject){
	console.log(data)
	let elements = [
		{
			type: 'header', 
			content: null
		},
		{
			type: 'body',
			content: {
				copy: [
					'You are receiving this because you (or someone else) have requested the reset of the password for your account',
			        'Please click on the following link to complete your password reset. This link will expire in 15 minutes.',
			        'If you did not request this, please ignore this email and your password will remain unchanged.'
				]
			}
		},
		{
			type: 'button',
			content: {
				copy: 'This is a button',
				url: 'http://localhost:3000/reset/' + data.token 
			}
		}, 
		{
			type: 'footer',
			content: null
		}
	]
	createEmail(elements)
	.then((html) => {
		sendEmail(html, data.user, subject)
	})
}

function constructUserApproved(data, subject){
	console.log(data)
	let elements = [
		{
			type: 'header', 
			content: null
		},
		{
			type: 'body',
			content: {
				copy: [
					"Congratulations.  You have been approved as a member of Q-Ventures",
			        'Please click on the following link to activate your account. This link will expire in 1 week',
			        'From here you can engage with prospective investments and investors alike. '
				]
			}
		},
		{
			type: 'button',
			content: {
				copy: 'Activate my profile',
				url: 'http://localhost:3000/reset/' + data.token 
			}
		}, 
		{
			type: 'footer',
			content: null
		}
	]
	createEmail(elements)
	.then((html) => {
		sendEmail(html, data.user, subject)
	})
}