import React, { Component } from 'react';
import './style.css';

export default class Quote extends Component {
	render() {
		return (
			<div className="Quote">
				<div className="Quote-section container-fluid">
					<div className="row valign">
						<div className="col-sm-6">
							<img src="https://www.qventures.co/sites/default/files/lex.jpg" className="img-responsive" />
						</div>
						<div className="col-sm-6">
							<div className="quote-content">
								<h1>If you invest nothing, the reward is worth little."</h1>
								<h5>Robert Walsh</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
