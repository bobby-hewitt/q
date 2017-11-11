import React, { Component } from 'react'
import './style.css'


const Investment = (props) => (
	<div className="adminInvestmentContainer" onClick={props.editInvestment.bind(this, props.investment._id)}>
	<div className="row">
		
			<div className="col-md-2">
	  		 	<div className="investmentImage" style={{backgroundImage: "url('" + props.investment.imageUrl + "')"}} />
	  		</div>
	  		<div className="col-md-9">  
			    <h4>{props.investment.title}</h4>
			    <p>Number of favorites</p>
			</div>
			<div className="col-md-1">  
			    <div className="chevronRight" />
			</div>
		</div>
	</div>
);

export default Investment

