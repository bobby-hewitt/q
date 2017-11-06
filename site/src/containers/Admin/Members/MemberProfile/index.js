import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../../../helpers/auth'
import { getMember, revokeMembership } from '../../../../actions/admin'
import { removeMemberFromState } from '../../../../actions/cleanup'
import Profile from '../../../../components/Profile'
import Button from '../../../../components/Button'



class MemberProfile extends Component{

	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.match.params.id
		}
		this.props.getMember(payload)			
	}

	revokeMembership(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.match.params.id
		}
		this.props.revokeMembership(payload)
	}

	componentWillUnmount(){
		this.props.removeMemberFromState()
	}


	render(){

		return(
			<div>
				{this.props.member &&
					<div>
						<Profile user={this.props.member} />
						<Button copy="Revoke membership" action={this.revokeMembership.bind(this)}/>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	member: state.members.member,
	isAdmin: state.user.isAdmin,
	jwt: state.authenticate.token,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	removeMemberFromState,
	revokeMembership,
	resetSuccessful: () => push('/'),
	getMember
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberProfile)