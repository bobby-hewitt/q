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
    let checkboxes = {}
    for ( var i = 0; i < form.elements.length; i++ ) {
       var e = form.elements[i];
       
       if (e.type === 'checkbox'){
          if (e.checked){
            if (checkboxes[e.name]){

              checkboxes[e.name].push(e.value)
            } else {
              checkboxes[e.name] = [e.value]
            }
          }
       } else {
          obj[e.name] = e.value
       }       
    }
    let checkboxKeys = Object.keys(checkboxes)
    if (checkboxKeys.length > 0){
      for (var j = 0; j < checkboxKeys.length; j++){
        obj[checkboxKeys[j]] = checkboxes[checkboxKeys[j]]
      }
    }
    console.log(obj)
    this.props.onSubmit(obj)
  }

  render(){
    return(
      <div>
        <form className="formContainer" id={this.props.formId}>
          {this.props.children}
         
            <div id="formButtonsContainer">
           
            {this.props.hasDelete &&
              <div className="formButton" id="deleteButton" onClick={this.props.deleteAction}>
                delete
              </div>
            }
             <div className="formButton" id="submitButton" onClick={this.getValues.bind(this, this.props.formId)}>
              {this.props.submitText}
            </div>
          </div>
    
        </form>
      </div>
    )
  }
}
