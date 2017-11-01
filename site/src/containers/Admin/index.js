import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../helpers/auth'

//routes
import ManageUsers from './ManageUsers'
import AddInvestment from './AddInvestment'
import ManageInvestments from './ManageInvestments'
import AddEvent from './AddEvent'
import Events from './Events'

//components
import AdminMenu from './AdminMenu'

import { Route, Link, withRouter } from 'react-router-dom'
import { setAsAdmin, goToLogin } from '../../actions/admin'

class Admin extends Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentWillMount(){
		if (!this.props.isAdmin){
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
	}

	render(){
		return(
			<div>
				{this.props.isAdmin &&
					<div className="adminContainer">
						<div className="contianer-fluid">
							<div className="row">
								<div className="col-md-3"  style={{position:"fixed"}}>
									<AdminMenu />
								</div>
								<div className="col-md-9 col-md-offset-3">
									<h3>Admin</h3>
									<Route exact path="/admin/manage-users" component={ManageUsers} />
									<Route exact path="/admin/events/add" component={AddEvent} />
									<Route exact path="/admin/events/edit" component={AddEvent} />
									<Route exact path="/admin/events" component={Events} />

									<Route exact path="/admin/add-investment" component={AddInvestment} />	
									<Route exact path="/admin/manage-investments" component={ManageInvestments} />
								</div>
							</div>
						</div>	
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAdmin: state.admin.isAdmin,
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