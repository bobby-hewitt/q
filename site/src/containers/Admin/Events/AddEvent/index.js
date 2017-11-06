import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { submitNewEvent, deleteEvent, editEventInputValue } from '../../../../actions/admin'
import { removeEventFromState } from '../../../../actions/cleanup'
import Form from '../../../../components/Form'
import TextInput from '../../../../components/Form/TextInput'
import FileUpload from '../../../../components/Form/FileUpload'

class AddEvent extends Component {

	onSubmit(obj){
		obj.id = this.props.event._id
		let payload = {
			jwt: this.props.jwt,
			data: obj,
			url: this.props.apiHost
		}
		this.props.submitNewEvent(payload)
		
	}

	onChange(e){
		let obj = {
			target : e.target.name,
			value : e.target.value
		}
		this.props.editEventInputValue(obj)
	}

	deleteEvent(event){		
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: {eventId: event}
		}
		this.props.deleteEvent(payload)
	}

	componentWillUnmount(){
		this.props.removeEventFromState()
	}


	render(){

		let event = this.props.event
		console.log(event)
		let name = event.name
		let time = event.time
		let description = event.description
		let addressLine1 = event.addressLine1
		let addressLine2 = event.addressLine2
		let addressLine3 = event.addressLine3
		let postcode = event.postcode
		let date = event.date
		return(
			<div>
				<Form 
					submitText="Submit" 
					onSubmit={this.onSubmit.bind(this)} 
					formId="createNewEventForm" 
					name="createNewEventForm" 
					hasDelete={this.props.location.pathname.indexOf('edit') > 0}
					deleteAction={this.deleteEvent.bind(this, event._id)}>	         
					<TextInput placeholder="Name of event" value={name} label="Event Name" name="name" onChange={this.onChange.bind(this)}/>
					<TextInput placeholder="Describe the event" value={description} label="Event Name" name="description" onChange={this.onChange.bind(this)}/>
					<input type="date" name="date"  value={date} onChange={this.onChange.bind(this)}/>
					<input type="time" name="time"  value={time} onChange={this.onChange.bind(this)}/>
					<TextInput placeholder="Address line 1" value={addressLine1} label="Address" name="addressLine1" onChange={this.onChange.bind(this)}/>
					<TextInput placeholder="Address line 2" value={addressLine2} name="addressLine2" onChange={this.onChange.bind(this)}/>
					<TextInput placeholder="Address line 3" value={addressLine3} name="addressLine3" onChange={this.onChange.bind(this)}/>
					<TextInput placeholder="Postcode / zip code" value={postcode} name="postcode" onChange={this.onChange.bind(this)}/>
			    </Form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	event: state.events.event,
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	removeEventFromState,
	editEventInputValue,
	deleteEvent,
	submitNewEvent
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent)