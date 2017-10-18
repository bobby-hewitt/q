import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import '../style.css'
import $ from 'jquery'

export default class Checkbox extends Component {

  

  render(){
    return(

      
        
        <label className="checkbox">
        <p className="checkboxContainer">{this.props.label}</p>
          <input type="checkbox" />
          <span/>
          </label>
         


    )
  }
}
