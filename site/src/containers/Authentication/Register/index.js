import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import TextArea from '../../../components/Form/TextArea'
import ImageUpload from '../../../components/Form/ImageUpload'
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
    // this.props.register(data)
  }

  render(){
    return(
      <div className="signUpFormContainer">
        {this.props.displayError &&
          <p>{this.props.errorMessage}</p>
        }
        <Form submitText="Submit Application" onSubmit={this.onSubmit.bind(this)} formId="signUpForm">
          <TextInput placeholder="Full name" label="name" name="name"/>
          <TextInput placeholder="Email" label="email" name="email"/>
          <TextInput placeholder="Job title" label="Job Title" name="jobTitle"/>
          <TextArea placeholder="Describe yourself" label="A little about you" name="description"/>
          <TextInput placeholder="01234 567890" label="Telephone" name="phone"/>
          <TextInput placeholder="uk" label="Country of residence" name="country"/>
          
          <div className="rowContainer">
            <Checkbox label="hello"  name="investmentPreferences" value="sector1"/>
            <Checkbox label="hello" name="investmentPreferences" value="2"/>
          </div>
          <div className="rowContainer">
            <Checkbox label="hello" name="investmentPreferences" value="3"/>
            <Checkbox label="hello" name="investmentPreferences" value="4"/>
          </div>
          <div className="rowContainer">
            <Checkbox label="hello" name="investmentPreferences" value="5"/>
            <Checkbox label="hello" name="investmentPreferences" value="6"/>
          </div>
          <div className="rowContainer">
            <Checkbox label="hello" name="investmentPreferences" value="7"/>
            <Checkbox label="hello" name="investmentPreferences" value="8"/>
          </div>

          <div className="rowContainer">
            <Checkbox label="hello" name="investmentPreferences" value="9"/>
            <Checkbox label="hello" name="investmentPreferences" value="10"/>
          </div>
          {this.props.avatarUrl &&
            <div className="avatarPreview" style={{backgroundImage: "url('" + this.props.avatarUrl + "')"}}/>
          }
          <ImageUpload name="file" filenamePrefix="user" onUploadImage={this.onUploadImage.bind(this)}/>
          <input type="hidden" name="avatarUrl" value={this.props.avatarUrl ? this.props.avatarUrl : ''} />
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