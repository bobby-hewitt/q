import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { getUsers, approveUser, rejectUser } from '../../../actions/admin'

class ManageUsers extends Component {

	componentWillMount(){
		console.log('managing users')
		console.log(this.props.jwt)
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost
		}
		this.props.getUsers(payload)
	}

	approveUser(user){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			user: user
		}
		this.props.approveUser(payload)
	}

	rejectUser(user){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			user: user
		}
		this.props.rejectUser(payload)
	}


	render(){
		return(
			<div>
				<h3>Awaiting approval</h3>
				{this.props.users && this.props.users.map((user, i ) => {
					if (!user.isApproved && !user.isAdmin){
						return(
							<div className="userContainer">
								{user.name}
								<img src={user.avatarUrl} className="avatar" />
								<div className="rowContainer">
									<div onClick={this.approveUser.bind(this, user._id)} className="adminApprovalButton">Approve</div>
									<div onClick={this.rejectUser.bind(this, user._id)}className="adminApprovalButton">Reject</div>
								</div>
							</div>
						)
					} else {
						return(
							<div />
						)
					}
				})}
				<h3>Existing users</h3>
				{this.props.users && this.props.users.map((user, i ) => {
					if (user.isApproved || user.isAdmin){
						return(
							<div className="userContainer" key={i}>
								{user.name}
								<img src={user.avatarUrl} className="avatar" key={i}/>
							</div>
						)
					} else {
						return(
							<div />
						)
					}
				})}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	jwt: state.authenticate.token,
	users: state.admin.users,
	passwordResetToken: state.authenticate.passwordResetToken,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
  	allowPasswordReset: state.authenticate.allowPasswordReset
})

const mapDispatchToProps = dispatch => bindActionCreators({
	approveUser,
	rejectUser,
	getUsers,
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsers)