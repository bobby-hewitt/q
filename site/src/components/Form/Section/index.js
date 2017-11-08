import React, { Component } from 'react'
import './style.css'


const Section = (props) => (
  <div className="formSectionContainer">
    	<p>{props.title}</p>
    	<div className="formSectionLine" />
  </div>
);

export default Section

