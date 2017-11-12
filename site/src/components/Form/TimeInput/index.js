import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

const TimeInput = props => (
	<div className="timeInput">
	{props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
  	<input name={props.name} type="time" onChange={props.onChange} value={props.value} className="timeInput" />
  	</div>
)


export default TimeInput