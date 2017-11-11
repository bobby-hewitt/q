import React, { Component } from 'react';
import './style.css';

export default class MemberSquare extends Component {
	render() {
		return (
			<div
				className="MemberProfileSquare"
				style={{
					backgroundImage:
						'url(https://www.qventures.co/sites/default/files/lex.jpg)'
				}}
			>
				<div className="MemberProfileSquare-content">
					<span className="MemberProfileSquare-content-details">
						<h5>LEX DEAK</h5>
						<p>Founding Partner</p>
					</span>
					<a href="" className="MemberProfileSquare-content-linkedIn">
						<img src="images/icon-linkedIn.svg" />
					</a>
				</div>
			</div>
		);
	}
}
