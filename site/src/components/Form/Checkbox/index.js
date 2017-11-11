import React, { Component } from 'react'
import './style.css'
import '../style.css'



const Checkbox = props => (
	 <label className="checkbox">
    	<p className="checkboxContainer">{props.label}</p>
      	<input type="checkbox" name={props.name} value={props.value}/>
      	<span/>
    </label>
)


export default Checkbox