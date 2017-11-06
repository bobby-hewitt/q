module.exports = function(arguments){
	return new Promise((resolve, reject) => {

		let snippet = '<tr class="footer" style=" color: #7B7B7B; background-color: #F9F9F9;font-size: 12px;color: #7B7B7B;letter-spacing: 0.2px;line-height: 18px;"> <td class="container" style="padding: 50px 30px;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nibh, porttitor id porta aliquam, venenatis sed lorem. Vivamus mollis leo ante, nec lobortis quam luctus eu. Fusce ac laoreet tortor. Aliquam faucibus nulla arcu, non ornare nisi venenatis a. Suspendisse tempor auctor felis, nec sollicitudin urna varius ut. Fusce dapibus tempus massa, eu ultricies justo hendrerit suscipit. Nam vestibulum turpis non quam aliquam, et malesuada nulla suscipit. Phasellus augue dolor, vestibulum dictum auctor vel, molestie eu risus. Sed eu urna et urna varius fringilla. Curabitur maximus lorem vel rutrum pellentesque. Pellentesque et ipsum vel purus varius iaculis quis aliquet ipsum. Morbi scelerisque massa sed porta posuere.<br/> <br /> ADVERTISING<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nibh, porttitor id porta aliquam, venenatis sed lorem. Vivamus mollis leo ante, nec lobortis quam luctus eu. Fusce ac laoreet tortor. Aliquam faucibus nulla arcu, non ornare nisi venenatis a. Suspendisse tempor auctor felis, nec sollicitudin urna. </td> </tr>'
		resolve(
			snippet
		)
	})
}