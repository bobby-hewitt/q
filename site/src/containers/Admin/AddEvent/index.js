import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { submitNewEvent } from '../../../actions/admin'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import FileUpload from '../../../components/Form/FileUpload'

class AddEvent extends Component {

	onSubmit(obj){
		let payload = {
			jwt: this.props.jwt,
			data: obj,
			url: this.props.apiHost
		}
		this.props.submitNewEvent(payload)
	}


	render(){
		return(
			<div>
				<h3>Add e</h3>
				<Form submitText="Submit" onSubmit={this.onSubmit.bind(this)} formId="createNewEventForm" name="createNewEventForm">	         
					<TextInput placeholder="Name of event" label="Event Name" name="eventName"/>
					<TextInput placeholder="Describe the event" label="Event Name" name="eventDescription"/>
					<input type="date" name="eventDate" />
					<input type="time" name="eventTime" />
					<TextInput placeholder="Address line 1" label="Address" name="addressLine1"/>
					<TextInput placeholder="Address line 2" name="addressLine2"/>
					<TextInput placeholder="Address line 3" name="addressLine3"/>
					<TextInput placeholder="Postcode / zip code" name="postcode"/>
			    </Form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	submitNewEvent
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent)