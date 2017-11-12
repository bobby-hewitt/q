import React, { Component } from 'react'
import './style.css'

const NavBarButton = (props) => (

  <div 
  	onClick={props.action.bind(this, props.path)}
  	className={props.isActive ? "NavBarButtonContainer active" :"NavBarButtonContainer"}>
  	<h4>{props.copy}</h4>
  </div>
);

export default NavBarButton

