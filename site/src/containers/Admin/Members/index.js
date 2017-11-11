import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import SectionHeader from '../SectionHeader'
import { getMembers } from '../../../actions/admin'
import AdminTopLevelPersonRecord from '../../../components/AdminTopLevelPersonRecord'
import Search from '../Search'

class Members extends Component {

	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost
		}
		this.props.getMembers(payload)
	}

	onMemberClick(id){
		this.props.getMember(id)
	}

	updateMembers(value){
		let param = value !== '' ? value : null
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			param
		}
		this.props.getMembers(payload)
	}


	render(){
		return(
			<div>
				<SectionHeader section="Members" />
				<Search onSearch={this.updateMembers.bind(this)} />
				{this.props.members && this.props.members.map((person, i) => {
					console.log(person)
					return(
						<AdminTopLevelPersonRecord key={i} person={person} action={this.onMemberClick.bind(this)}/>

					)
				})

				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	jwt: state.authenticate.token,
	members: state.members.members,
	passwordResetToken: state.authenticate.passwordResetToken,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
  	allowPasswordReset: state.authenticate.allowPasswordReset
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getMembers,
	getMember: (id) => push('/admin/member/' + id)
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)

