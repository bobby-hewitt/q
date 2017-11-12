import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../helpers/auth'
//routes

import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'

import { Route, Link, withRouter } from 'react-router-dom'
import { setAsAdmin, goToLogin } from '../../actions/admin'

class UnAuthenticated extends Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}



	render(){
		return(
			<div>
				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/contact" component={Contact} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAdmin: state.user.isAdmin,
	jwt: state.authenticate.token,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	setAsAdmin,
	goToLogin,
	resetSuccessful: () => push('/'),
	
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)