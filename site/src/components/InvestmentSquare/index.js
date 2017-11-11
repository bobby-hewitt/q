import React, { Component } from 'react';
import './style.css';

export default class InvestmentSquare extends Component {
	render() {
		return (
			<div className="InvestmentSquare">
				<div className="InvestmentSquare-information text-center">
					<div className="InvestmentSquare-information-header">
						<h5>EQUITY</h5>
					</div>
					<img src="https://image.freepik.com/free-icon/apple-logo_318-40184.jpg" />
					<h3 className="semi">COMPANY</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy.
					</p>
				</div>
				<span className="InvestmentSquare-stats">
					<span className="InvestmentSquare-stats-item">
						<h6>Target</h6>
						<p>1.5M</p>
					</span>
					<span className="InvestmentSquare-stats-item">
						<h6>Target</h6>
						<p>1.5M</p>
					</span>
					<span className="InvestmentSquare-stats-item">
						<h6>Target</h6>
						<p>1.5M</p>
					</span>
					<span className="InvestmentSquare-stats-favourite">
						
					</span>
				</span>
			</div>
		);
	}
}
