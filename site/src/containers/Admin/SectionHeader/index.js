import React, { Component } from 'react'
import './style.css'

const SectionHeader = (props) => (

  <div className="adminSectionHeaderContainer">
  	<h1>{props.section}</h1>
  	{props.addNew &&
	  	<div 
	  		className="addNewContainer" 
	  		onClick={props.action.bind(this)}>
	  		<div className="addNewButton">
	  			+
	  		</div>
	  	</div>
	 }
  </div>
);

export default SectionHeader

