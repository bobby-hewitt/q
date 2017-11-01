import React, { Component } from 'react'
import './style.css'

const Button = (props) => (
  <div 
  	onClick={props.action}
  	className="buttonContainer"
  	style={{
  		width:props.width,
  		color: props.color,
  		backgroundColor: props.background
  	}}>
  	<p>{props.copy}</p>
  </div>
);

export default Button

