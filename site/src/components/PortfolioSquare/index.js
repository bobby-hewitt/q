import React, { Component } from 'react';
import './style.css';

export default class PortfolioSquare extends Component {
	render() {
		return (
			<div
				className="PortfolioSquare"
			>
				<div className="PortfolioSquare-logo">
					<img src="https://image.freepik.com/free-icon/apple-logo_318-40184.jpg" />
				</div>
				<span className="PortfolioSquare-content text-center">
					<h5>COMPANY</h5>
					<p>Marketplace for Bikes</p>
					<p class="small">Invested in 2011</p>
				</span>
			</div>
		);
	}
}
