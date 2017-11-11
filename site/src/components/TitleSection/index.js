import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';

class TitleSection extends Component {
	render() {
		return (
			<div
				className={
					this.props.centered
						? 'titleSectionContainer centered'
						: 'titleSectionContainer'
				}
				style={{
					minHeight: this.props.minHeight,
					paddingBottom: this.props.vPadding,
					paddingTop: this.props.vPadding,
					background: this.props.background,
					color: this.props.color
				}}
			>
				<div className="row">
					<div className="col-md-8  col-md-offset-2">
						{this.props.title ? <h1>{this.props.title}</h1> : null}
						{this.props.subTitle ? (
							<h4>{this.props.subTitle}</h4>
						) : null}
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TitleSection);
