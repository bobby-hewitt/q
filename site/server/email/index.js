createEmail = require('./createEmail')
sendEmail = require('./sendEmail')

module.exports = function(action, data){
	switch(action){
		case 'password-reset':
			return constructPasswordReset(data, 'Reset your password')
		case 'user-approved':
			return constructUserApproved(data, "You've been approved")
		case 'user-rejected':
			return constructUserRejected(data, "Your application has not been successful")
		case 'awaiting-approval':
			return constructAwaitingApproval(data, "Your application has been received")
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
				url: 'https://q-ventures.herokuapp.com/reset' + data.token 
			}
		}, 
		{
			type: 'footer',
			content: null
		}
	]
	createEmail(elements)
	.then((html) => {
		sendEmail(html, data, subject)
	}).catch((err) => {
		return res.status(500).send('error sending email', err)
	})
}

function constructAwaitingApproval(data, subject){
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
					"Hi " + data.name + ',', 
					'Thank you for you application to become a member with Q Ventures',
			        'We carefully vet all our members to ensure we provide the highest quality of service to everyone.  It may take up to 7 days for us to consider your application',
			        'Once we have made a decision you will be notified with further advice.',
			        'Thanks again for your application'
				]
			}
		},
		{
			type: 'footer',
			content: null
		}
	]
	createEmail(elements)
	.then((html) => {
		sendEmail(html, data, subject)
	})
}

function constructUserRejected(data, subject){
	let elements = [
		{
			type: 'header', 
			content: null
		},
		{
			type: 'body',
			content: {
				copy: [
					"Dear " + data.name + ',', 
					'Thank you for you application to become a Q Ventures member',
			        'Unfortunately your application has not been successful this time.  We carefully select members whos investment stategies and preferences match the needs of our clients and unfortunately, at this time, we have not found an appropriate fit for you.',
			        'Just because your application has not been successful now does not mean it wont be in the future.  If you would like to submit another application at a later date please feel free.',
			        'Thanks again for your application.  We wish you the best of luck with your future investments.'
				]
			}
		},
		{
			type: 'footer',
			content: null
		}
	]
	createEmail(elements)
	.then((html) => {
		sendEmail(html, data, subject)
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
					"Hi " + data.user.name + ',', 
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
				url: 'https://q-ventures.herokuapp.com/reset' + data.token 
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