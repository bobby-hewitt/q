import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import $ from 'jquery'

export default class Form extends Component {

  getValues(id){
    let obj = {}
    var form = document.getElementById(id)
    for ( var i = 0; i < form.elements.length; i++ ) {
       var e = form.elements[i];
       obj[e.name] = e.value
    }
    this.props.onSubmit(obj)
  }

  render(){
    return(
      <div>
        <form className="formContainer" id={this.props.formId}>
          {this.props.children}
          <div className="submitButton" onClick={this.getValues.bind(this, this.props.formId)}>
            {this.props.submitText}
          </div>
        </form>
      </div>
    )
  }
}
