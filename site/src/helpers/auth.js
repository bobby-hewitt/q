import $ from 'jquery'

export const jwtAuth = (req) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: req.method, //GET, POST, PUT
			url: req.url + req.endpoint,  //the url to call
			contentType: "application/json",           
			headers: {"jwt": req.jwt},
		}).done(function (response) {
			resolve(response)
		}).fail(function (err)  {
			reject(err)
		});
	})
}
