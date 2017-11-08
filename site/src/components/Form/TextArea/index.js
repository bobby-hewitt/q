import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

const TextArea = props => (
	<div className="textArea">
		<label htmlFor={props.name}>{props.label}</label>
	  	<textarea form={props.formId} name={props.name} onChange={props.onChange} value={props.value} className="textArea" placeholder={props.placeholder} />
  	</div>
)


export default TextArea