import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import $ from 'jquery'

export default class Form extends Component {

  componentWillMount(){
    console.log(this.props.hasDelete)
  }

  getValues(id){
    let obj = {}
    var form = document.getElementById(id)
    for ( var i = 0; i < form.elements.length; i++ ) {
       var e = form.elements[i];
       obj[e.name] = e.value
    }
    console.log(obj)
    this.props.onSubmit(obj)
  }

  render(){
    return(
      <div>
        <form className="formContainer" id={this.props.formId}>
          {this.props.children}
          <div className="rowContainer">
            <div className="formButton" id="submitButton" onClick={this.getValues.bind(this, this.props.formId)}>
              {this.props.submitText}
            </div>
            {this.props.hasDelete &&
              <div className="formButton" id="deleteButton" onClick={this.props.deleteAction}>
                delete
              </div>
            }
          </div>
        </form>
      </div>
    )
  }
}
