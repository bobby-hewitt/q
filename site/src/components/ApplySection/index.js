import React, { Component } from 'react';
import './style.css';

export default class ApplySection extends Component {
	render() {
		return (
			<div className="ApplySection">
				<div className="row">
					<div className="col-sm-4 col-sm-offset-4 text-center">
						<span className="snack"/>
						<h1>Apply</h1>
						<p>
							We prioritise membership requests from individuals
							who have been referred by an existing member
						</p>
						<br/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-7 ApplySection-applyOnline-Container">
						<div className="ApplySection-content">
							<h3>Apply Online</h3>
							<p>
								Submit your application online and we’ll be in
								touch within 3 days
							</p>
							<a href="" className="qVenturesLink">
								GO TO ONLINE APPLICATION
							</a>
						</div>
					</div>
					<div className="col-sm-5 ApplySection-applyPhone-Container">
						<div className="ApplySection-content">
							<h3>Apply by Phone</h3>
							<p>
								Submit your application online and we’ll be in
								touch within 3 days
							</p>
							<span className="qVenturesLink">
								+44 2030 736 921
							</span>
							<span className="qVenturesLink">
								LONDON@QVENTURES.CO
							</span>
						</div>
					</div>
				</div>
				<div className="row ApplySection-d0sclaimer">
					<div className="col-sm-6 col-sm-offset-3 text-center">
						<p className="small">
							Membership of QVentures is free for investors. We
							charge companies raising capital a success fee which
							is split between cash and equity in the company.
						</p>
						<p className="small">
							By taking part of our fee in equity, QVentures is
							aligning its interests with the investors.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
