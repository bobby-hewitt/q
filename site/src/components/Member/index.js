import React, { Component } from 'react'
import './style.css'


const Member = (props) => (
  <div className="adminMemberContainer" onClick={props.action.bind(this, props.member._id)}>
    	<div style={{backgroundImage: "url('" + props.member.avatarUrl + "')"}} className="adminMemberImage" />
    	<p>{props.member.email}</p>
  </div>
);

export default Member

