import React, { Component } from 'react'
import './style.css'
import Button from '../Button'


const Event = (props) => (
  <div>
    <p>{props.event.name}</p>
    {props.admin &&
    	<div className="buttonContainer">
	    	<Button action={props.editEvent.bind(this,props.event._id)} copy="edit"/>
	    	<Button action={props.deleteEvent.bind(this,props.event._id)} copy="delete"/>
    	</div>	
    }
  </div>
);

export default Event

