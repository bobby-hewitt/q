import React, { Component } from 'react';
import './style.css'

export default class Testimonial extends Component {
	render() {
		return (
			<div className="Testimonial container-fluid">
				<div className="row">
					<div className="col-sm-5 col-sm-offset-4">
						<h1>"If you invest nothing, the reward is worth little."</h1>
						<h5>Richelle E. Goodrich</h5>
					</div>
				</div>
			</div>
		)
	}
}
