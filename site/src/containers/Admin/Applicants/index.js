import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import SectionHeader from '../SectionHeader'
import Applicant from '../../../components/Applicant'
import { getApplicants, approveApplicant, rejectApplicant } from '../../../actions/admin'

class Applicants extends Component {

	componentWillMount(){
		console.log('managing applicants')
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost
		}
		this.props.getApplicants(payload)
	}

	approveApplicant(user){
		console.log('appriving')
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			user: user
		}
		this.props.approveApplicant(payload)
	}

	rejectApplicant(user){
		console.log('rejecting')
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			user: user
		}
		this.props.rejectApplicant(payload)
	}

	getApplicant(id){
		this.props.getApplicant(id)
	}


	render(){
		return(
			<div>
				<SectionHeader section="Applicants"/>
				{this.props.applicants && this.props.applicants.length > 0 && this.props.applicants.map((applicant, i ) => {
					return(
				
							<Applicant key={i} applicant={applicant} action={this.getApplicant.bind(this)}/>
						
					)	
				})}
				{!this.props.applicants || this.props.applicants.length === 0 && 
					<p>There are no new applicants</p>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	jwt: state.authenticate.token,
	applicants: state.applicants.applicants,
	passwordResetToken: state.authenticate.passwordResetToken,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
  	allowPasswordReset: state.authenticate.allowPasswordReset
})

const mapDispatchToProps = dispatch => bindActionCreators({
	approveApplicant,
	rejectApplicant,
	getApplicants,
	getApplicant: (id) => push('/admin/applicant/' + id)
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Applicants)