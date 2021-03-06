import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../helpers/auth'


import { Route, Link, withRouter } from 'react-router-dom'
import { setAsAdmin, goToLogin } from '../../actions/admin'

class Member extends Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentWillMount(){
			let req = {
				url: this.props.apiHost,
				endpoint: '/admin/authenticate',
				jwt: this.props.jwt,
				method: 'GET'
			}
			jwtAuth(req).then((response) => {
				this.props.setAsAdmin()
			}).catch((err) => {
				this.props.goToLogin()
			})
	}

	render(){
		return(
			<div>
				<div className="memberContainer">
					<div className="contianer-fluid">
						<div className="row">
							<div className="col-md-12">
								<h3>
									The members section is currently under construction.  <br/>
									Visit /admin for more functionality.
								</h3>
							</div>
						</div>
					</div>	
				</div>
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
	setAsAdmin,
	goToLogin,
	resetSuccessful: () => push('/'),
	
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)