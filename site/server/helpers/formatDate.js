const formatDate = (timestamp) => {
	return new Promise((resolve, reject) => {
		let date = new Date(timestamp)
		console.log(date)
	})
}

export default formatDate


