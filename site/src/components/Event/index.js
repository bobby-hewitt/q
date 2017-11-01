import React, { Component } from 'react'
import './style.css'
import Button from '../Button'


const Event = (props) => (
  <div>
    <p>{props.event.name}</p>
    {props.admin &&
    	<div className="buttonContainer">
	    	<Button action={props.editEvent.bind(this, props.event._id)} background={"red"}copy="edit"/>
	    	<Button action={props.deleteEvent.bind(this, props.event._id)} background={"red"}copy="delete"/>
    	</div>	
    }
  </div>
);

export default Event

