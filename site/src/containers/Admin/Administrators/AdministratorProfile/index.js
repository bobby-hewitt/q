import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { jwtAuth } from '../../../../helpers/auth'
import { getMember, removeAdminRights } from '../../../../actions/admin'
import { removeMemberFromState } from '../../../../actions/cleanup'
import Profile from '../../../../components/Profile'
import Button from '../../../../components/Button'


class AdministratorProfile extends Component{

	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.match.params.id
		}
		this.props.getMember(payload)			
	}



	removeAdminRights(id){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: this.props.match.params.id
		}
		this.props.removeAdminRights(payload)
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
						<Button copy="Remove admin rights" action={this.removeAdminRights.bind(this)}/>
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
	removeAdminRights,
	resetSuccessful: () => push('/'),
	getMember
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministratorProfile)