export default function(timestamp){
	let suffix = ['','st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st','nd','rd','th','th','th','th','th','th','th','st']
	let months = ['Jan', 'Feb', "Mar", 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	
	let date = new Date(timestamp)

	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();
	let formattedDate = day + suffix[day] + ' ' + months[monthIndex] + ' ' + year

	return formattedDate
}



