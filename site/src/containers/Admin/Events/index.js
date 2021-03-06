import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { getEvents, deleteEvent, editEvent } from '../../../actions/admin'
import Form from '../../../components/Form'
import Event from '../../../components/Event'
import SectionHeader from '../SectionHeader'
import Search from '../Search'

class Events extends Component {

	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost
		}
		this.props.getEvents(payload)
	}

	editEvent(event){
		console.log('editing event')
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: event
		}
		this.props.editEvent(payload)
	}


	addEvent(){
		console.log('calling add event')
		this.props.addEvent()
	}

	updateEvents(value){
		let param = value !== '' ? value : null
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			param
		}
		this.props.getEvents(payload)
	}
	
	render(){
		return(
			<div>
				<SectionHeader section="Events" item="event" addNew={true} action={this.addEvent.bind(this)}/>
				<Search onSearch={this.updateEvents.bind(this)} />
				{this.props.events && this.props.events.map((event, i) => {
					return(
						<Event event={event} editEvent={this.editEvent.bind(this)} key={i} admin={true} />
					)
				})}
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
	getEvents,
	deleteEvent,
	editEvent,
	addEvent: () => push('/admin/events/add')
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)