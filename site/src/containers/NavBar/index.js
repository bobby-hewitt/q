import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../helpers/auth'

import NavBarProfile from './NavBarProfile'
import NavBarButton from './NavBarButton'
import { Route, Link, withRouter } from 'react-router-dom'
import { setAsAdmin, goToLogin } from '../../actions/admin'

class NavBar extends Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}

	onButtonClick(path){
		this.props.push(path)
	}

	
	render(){
		return(
			<div className="navBarContainer">
				<img src={require('../../assets/images/logo-black.png')} className="navBarLogo"/>
				
				<div className="navBarButtonsContainer">
					{this.props.links && this.props.links.map((link, i) => {
						return(
							<NavBarButton copy={link.copy} path={link.path} action={this.onButtonClick.bind(this)} isActive={true}/>
						)
					})}
				</div>
				<NavBarProfile user={this.props.user}/>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
	jwt: state.authenticate.token,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	setAsAdmin,
	goToLogin,
	push: (path) => push('/' + path),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)