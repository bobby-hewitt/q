import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//routes


import { Route, Link, withRouter } from 'react-router-dom'


class NavBarProfile extends Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}

	
	render(){
		return(
			<div>
				{!this.props.user.imageUrl &&
					<div className="navBarAuthContainer">
						<h4>Login</h4>
					</div>
				}
				{this.props.user.imageUrl &&
					<div className="navBarAuthContainer">
						<div className="navBarAuthImage" style={{backgroundImage: "url('" + this.props.user.imageUrl + "')"}} />
						<h4>{this.props.user.name}</h4>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	jwt: state.authenticate.token,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({

	resetSuccessful: () => push('/'),
	
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarProfile)