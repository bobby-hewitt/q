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
  	{props.copy}
  </div>
);

export default Button

