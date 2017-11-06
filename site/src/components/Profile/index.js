import React, { Component } from 'react'
import './style.css'


const Profile = (props) => (
  <div className="adminMemberContainer">
  		<p>{props.user.name}</p>
    	<div style={{backgroundImage: "url('" + props.user.avatarUrl + "')"}} className="adminUserImage" />
    	<p>{props.user.email}</p>
  </div>
);

export default Profile

