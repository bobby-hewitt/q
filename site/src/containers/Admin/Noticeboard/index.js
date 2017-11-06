import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

import SectionHeader from '../SectionHeader'

class Noticeboard extends Component {

	addPost(){
		console.log('Adding post')
	}

	
	render(){
		return(
			<div>
				<SectionHeader section="Noticeboard" item="post" addNew={true} action={this.addPost.bind(this)}/>	
			</div>
		)
	}
}

const mapStateToProps = state => ({
	events: state.events.events,
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({


}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Noticeboard)