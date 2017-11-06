import React, { Component } from 'react'
import './style.css'
import Button from '../Button'


const Event = (props) => (
  <div className="adminEventContainer" onClick={props.editEvent.bind(this, props.event._id)}>
    <h4>{props.event.name}</h4>
    <p>{props.event.date}</p>
    <p>{props.event.time}</p>
    <p>{props.event.description}</p>

  </div>
);

export default Event

