import React, { Component } from 'react'
import './style.css'

const Button = ({action, copy, type}) => (
  <div onClick={action} className="buttonContainer">
  	<p>{copy}</p>
  </div>
);

export default Button

