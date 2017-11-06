import React, { Component } from 'react'
import './style.css'


const Applicant = (props) => (
  <div className="adminApplicantContainer" onClick={props.action.bind(this, props.applicant._id)}>
    	<div style={{backgroundImage: "url('" + props.applicant.avatarUrl + "')"}} className="adminApplicantImage" />
    	<p>{props.applicant.email}</p>
  </div>
);

export default Applicant

