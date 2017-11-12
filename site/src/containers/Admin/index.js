import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../helpers/auth'
//routes
import Members from './Members'
import MemberProfile from './Members/MemberProfile'
import AddInvestment from './Investments/AddInvestment'
import Investments from './Investments'
import AddEvent from './Events/AddEvent'
import Events from './Events'
import Applicants from './Applicants'
import Noticeboard from './Noticeboard'
import Administrators from './Administrators'
import AddAdministrator from './Administrators/AddAdministrator'
import AdministratorProfile from './Administrators/AdministratorProfile'
import ApplicantProfile from './Applicants/ApplicantProfile'
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
				{this.props.isAdmin &&
					<div className="adminContainer">
						<div className="contianer-fluid">
							<div className="row">
								<div className="col-md-2"  style={{position:"fixed"}}>
									<AdminMenu />
								</div>
								<div className="col-md-10 col-md-offset-2">
									<div className="row">
										<div className="col-md-8 col-md-offset-2">
										
											<Route exact path="/admin/events" component={Events} />
											<Route exact path="/admin/events/add" component={AddEvent} />
											<Route exact path="/admin/events/edit" component={AddEvent} />
											<Route exact path="/admin/investments" component={Investments} />
											<Route exact path="/admin/investments/add" component={AddInvestment} />
											<Route exact path="/admin/investments/edit" component={AddInvestment} />
											<Route exact path="/admin/applicants" component={Applicants} />
											<Route exact path="/admin/applicant/:id" component={ApplicantProfile} />
											<Route exact path="/admin/members" component={Members} />
											<Route exact path="/admin/member/:id" component={MemberProfile} />
											<Route exact path="/admin/noticeboard" component={Noticeboard} />
											<Route exact path="/admin/administrators" component={Administrators} />
											<Route exact path="/admin/administrators/add" component={AddAdministrator} />
											<Route exact path="/admin/administrator/:id" component={AdministratorProfile} />
										</div>
									</div>
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