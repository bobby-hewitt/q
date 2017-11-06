import React, { Component } from 'react'
import './style.css'


const Investment = (props) => (
  <div className="adminInvestmentContainer" onClick={props.editInvestment.bind(this, props.investment._id)}>
    <h4>{props.investment.title}</h4>
   	<img src={props.investment.imageUrl} className="investmentImage" /> 
  </div>
);

export default Investment

