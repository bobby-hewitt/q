import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import SectionHeader from '../SectionHeader'
import { getMembers } from '../../../actions/admin'
import Member from '../../../components/Member'
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


	render(){
		return(
			<div>
				<SectionHeader section="Members" />
				{this.props.members && this.props.members.map((member, i) => {
					return(
						<Member key={i} member={member} action={this.onMemberClick.bind(this)}/>
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

