import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

const TextInput = props => (
	<div className="textInput">
	{props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
  	<input name={props.name} onChange={props.onChange} value={props.value} className="textInput" placeholder={props.placeholder} />
  	</div>
)


export default TextInput