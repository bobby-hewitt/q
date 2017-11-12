import React, { Component } from 'react'
import './style.css'


const Section = (props) => (
  <div className="formSectionContainer">
    	<h3>{props.title}</h3>
    	<div className="formSectionLine" />
  </div>
);

export default Section

