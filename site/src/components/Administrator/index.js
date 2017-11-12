import React, { Component } from 'react'
import './style.css'
import Button from '../Button'





const Administrator = (props) => (
  <div className="adminTopLevelPersonRecordContainer" >
  	<div className="row">
  		<div className="col-md-1 col-xs-2">
    		<div style={{backgroundImage: "url('" + props.administrator.imageUrl + "')"}} className="adminTopLevelPersonRecordImage" />
    	</div>
    	<div className="col-md-11 col-xs-10">
    		<div className="topRowPadding">
	    		<div className="row">
	    			<div className="col-md-4">
			    		<h3>{props.administrator.name}</h3>
			    		
				    </div>
				    <div className="col-md-1 col-md-offset-7">
				    	<div className="flexEnd">
				    		<p className="chevronRight" />
				    	</div>
				    </div>
				</div>
			</div>
			<div className="row">
    			<div className="col-md-4">
		    		<p>{props.administrator.email}</p>
			    </div>
			    <div className="col-md-1">
			    	<p>Investor</p>
			    </div>
				<div className="col-md-2">
			    	<p>London, UK</p>
			    </div>
			    <div className="col-md-3 col-md-offset-2">
			    	<div className="flexEnd hideSmall">
			    		<p>London, UK</p>
			    	</div>
			    </div>
			</div>
	    </div>
  </div>
  </div>
);

export default Administrator
