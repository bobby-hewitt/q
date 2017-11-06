import React, { Component } from 'react'
import './style.css'
import Button from '../Button'


const Administrator = (props) => (
  <div className="adminAdministratorContainer" >
    	<div style={{backgroundImage: "url('" + props.administrator.avatarUrl + "')"}} className="adminAdministratorImage" />
    	<p>{props.administrator.email}</p>
    	{props.canRemove &&
    		<Button copy="Remove admin rights" action={props.action.bind(this, props.administrator._id)}/>
    	}
  </div>
);

export default Administrator

