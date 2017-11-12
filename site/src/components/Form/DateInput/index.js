import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

const DateInput = props => (
	<div className="dateInput">
	{props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
  	<input name={props.name} type="date" onChange={props.onChange} value={props.value} className="dateInput" />
  	</div>
)


export default DateInput