import React, { Component } from 'react'
import './style.css'

const AdminMenuButton = (props) => (

  <div 
  	onClick={props.action.bind(this, props.buttonId)}
  	className={props.isActive ? "adminMenuButtonContainer active" :"adminMenuButtonContainer"}>
  	<p>{props.copy}</p>
  </div>
);

export default AdminMenuButton

