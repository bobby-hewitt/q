import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../../../helpers/auth'
import { getApplicant, approveApplicant, rejectApplicant } from '../../../../actions/admin'
import Profile from '../../../../components/Profile'
import Button from '../../../../components/Button'



class ApplicantProfile extends Component{

	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.match.params.id
		}
		this.props.getApplicant(payload)		
	}

	revokeMembership(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.member._id
		}
		this.props.revokeMembership(payload)
	}

	approveApplicant(id){
		console.log('appriving')
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.applicant._id
		}
		this.props.approveApplicant(payload)
	}

	rejectApplicant(id){
		console.log('rejecting')
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.applicant._id
		}
		this.props.rejectApplicant(payload)
	}

	render(){
		return(
			<div>
				<Profile user={this.props.applicant} />
				<div className="rowContainer">
					<Button copy="Approve" action={this.approveApplicant.bind(this)}/>
					<Button copy="Reject" action={this.rejectApplicant.bind(this)}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	applicant: state.applicants.applicant,
	isAdmin: state.user.isAdmin,
	jwt: state.authenticate.token,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	approveApplicant,
	rejectApplicant,
	resetSuccessful: () => push('/'),
	getApplicant
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicantProfile)