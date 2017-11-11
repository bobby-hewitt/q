import React, { Component } from 'react';
import './style.css'

export default class PageHeader extends Component {
	render() {
		return (
			<div className="PageHeader container-fluid">
				<div className="row">
					<div className="col-sm-4 col-sm-offset-1 column-flush">
						<h1>{this.props.title}</h1>
						<h3>{this.props.subline}</h3>
					</div>
				</div>
			</div>
		)
	}
}
