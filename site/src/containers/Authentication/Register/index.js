import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import FileUpload from '../../../components/Form/FileUpload'
import Checkbox from '../../../components/Form/Checkbox'
import './style.css'
import $ from 'jquery'

import { register, setAvatarUrl } from '../../../actions/user'
import { showError } from '../../../actions/error'

class Register extends Component {


  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  onUploadImage(url){
    this.props.setAvatarUrl(url)
  }

  onSubmit(payload){
    // if (!this.validateEmail(payload.email)){
    //   this.props.showError('Email address is invalid')
    //   return
    // } 
    let data = {
      url: this.props.apiHost,
      payload: payload,
      password: Math.random() * (Math.random() * 10000000)
    }
    console.log(payload)
    this.props.register(data)
  }

  render(){
    return(
      <div className="signUpFormContainer">
        {this.props.displayError &&
          <p>{this.props.errorMessage}</p>
        }
        <Form submitText="Submit Application" onSubmit={this.onSubmit.bind(this)} formId="signUpForm">
          <h3 className="formHeader">Full name</h3>
          <TextInput placeholder="Full name" label="name" name="name"/>
          <h3 className="formHeader">Email</h3>
          <TextInput placeholder="Email" label="email" name="email"/>
          <h3 className="formHeader">Job Title</h3>
          <TextInput placeholder="Job title" label="Job Title" name="jobTitle"/>
          <h3 className="formHeader">About you</h3>
          <TextInput placeholder="Describe yourself" label="A little about you" name="description"/>
          <h3 className="formHeader">Telephone</h3>
          <TextInput placeholder="01234 567890" label="Telephone" name="phone"/>
          <h3 className="formHeader">Country of residence</h3>
          <TextInput placeholder="uk" label="Country of residence" name="country"/>
          
          <h3 className="formHeader">Investment preferences</h3>
          <div className="rowContainer">
            <Checkbox label="hello" />
            <Checkbox label="hello"/>
          </div>
          <div className="rowContainer">
            <Checkbox label="hello"/>
            <Checkbox label="hello"/>
          </div>
          <div className="rowContainer">
            <Checkbox label="hello"/>
            <Checkbox label="hello"/>
          </div>
          <div className="rowContainer">
            <Checkbox label="hello"/>
            <Checkbox label="hello"/>
          </div>

          <h3 className="formHeader">Investment size</h3>
          <div className="rowContainer">
            <Checkbox label="hello"/>
            <Checkbox label="hello"/>
          </div>
          <h3 className="formHeader">Profile picture</h3>
          {this.props.avatarUrl &&
            <div className="avatarPreview" style={{backgroundImage: "url('" + this.props.avatarUrl + "')"}}/>
          }
          <FileUpload name="file" filenamePrefix="user" onUploadImage={this.onUploadImage.bind(this)}/>
          <input type="hidden" name="avatarUrl" value={this.props.avatarUrl ? this.props.avatarUrl : null} />
          <input type="hidden" name="password" value={Math.random() * (Math.random() * 10000000000)} />

        </Form>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  avatarUrl: state.user.avatarUrl,
  apiHost:state.setup.apiHost,
  displayError: state.error.showError,
  errorMessage: state.error.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  showError,
  setAvatarUrl,
  register,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)