import React, { Component } from 'react'
import './style.css'


const Profile = (props) => (
  <div className="adminProfileContainer">
  		<div className="row">
  		<div className="col-md-2">
  			<div style={{backgroundImage: "url('" + props.user.imageUrl + "')"}} className="adminProfileImage" />
  		</div>
  		<div className="col-md-10">
        <div className="row">
          <div className="col-md-12">
    			   <h1>{props.user.name}</h1>
          </div>
        </div>
  			<div className="row">
  				<div className="col-md-6">
  					<p>Email</p>
            <h4>{props.user.email}</h4>
  					
  				</div>
  				<div className="col-md-6">
  					<p>Phone</p>
            <h4>{props.user.phone}</h4>
					
  				</div>
  			</div>
  			<div className="row">
  				<div className="col-md-6">
  					<p>Country</p>
            <h4>{props.user.country}</h4>
  					
  				</div>
  				<div className="col-md-6">
  					<p>Address</p>
            <h4>{props.user.addressLine1}</h4>
            <h4>{props.user.postcode}</h4>
					
  				</div>
  			</div>
  			<div className="row">
  				<div className="col-md-12">
	  				 <p>About me</p>
	  				 <h4>{props.user.description}</h4>
  				</div>
  			</div>
         <div className="row">
          <div className="col-md-10">
          <p>Investment size</p>
          {props.user.investmentSize && props.user.investmentSize.length > 0 && props.user.investmentSize.map((size, i) => {
            return(
              <div key={i}>
                <h4>{size}</h4>
              </div>
            )
          })}
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
          <p>Interested in:</p>
          {props.user.investmentSectors && props.user.investmentSectors.length > 0 && props.user.investmentSectors.map((sector, i) => {
            return(
              <div key={i} className="investmentSectorContainer">
                <h4>{sector}</h4>
              </div>
            )
          })}
          </div>
        </div>
        
  		</div>	
  	</div>
  </div>
);

export default Profile
