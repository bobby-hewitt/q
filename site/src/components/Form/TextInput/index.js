import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

const TextInput = props => (
  	<input name={props.name} className="textInput" placeholder={props.placeholder} />
)


export default TextInput