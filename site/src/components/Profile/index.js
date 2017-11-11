import React, { Component } from 'react'
import './style.css'


const Profile = (props) => (
  <div className="adminProfileContainer">
  		<div className="row">
  		<div className="col-md-2">
  			<div style={{backgroundImage: "url('" + props.user.avatarUrl + "')"}} className="adminProfileImage" />
  		</div>
  		<div className="col-md-10">
  			<h1>{props.user.name}</h1>
  			<div className="row">
  				<div className="col-md-6">
  					<p>Email</p>
  					
  				</div>
  				<div className="col-md-6">
  					<p>Phone</p>
					
  				</div>
  			</div>
  			<div className="row">
  				<div className="col-md-6">
  					<p>Country</p>
  					
  				</div>
  				<div className="col-md-6">
  					<p>Address</p>
					
  				</div>
  			</div>
  			<div className="row">
  				<div className="col-md-12">
	  				<p>About me</p>
	  				
  				</div>
  			</div>
  		</div>	
  	</div>
  </div>
);

export default Profile
