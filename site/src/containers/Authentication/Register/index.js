import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import TextArea from '../../../components/Form/TextArea'
import ImageUpload from '../../../components/Form/ImageUpload'
import FileUpload from '../../../components/Form/FileUpload'
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';
import SectionBox from '../../../components/SectionBox';
import Checkbox from '../../../components/Form/Checkbox'
import './style.css'
import $ from 'jquery'

import { register, setImageUrl } from '../../../actions/user'
import { showError } from '../../../actions/error'

class Register extends Component {


  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  onUploadImage(url){
    this.props.setImageUrl(url)
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
      <div className="Register">
        <PageHeader
          title="Apply for membership"
          subline="Apply online with the form below"
        />
        {this.props.displayError &&
          <p>{this.props.errorMessage}</p>
        }

        <div className="Register-content container-fluid">
          <div className="row">
            <div className="col-sm-2 col-sm-offset-1">
              <SectionBox background="#554646" className="dark">
                <h3>About You</h3>
              </SectionBox>
            </div>
            <div className="col-sm-6 col-sm-offset-1">

              <Form submitText="Submit Application" onSubmit={this.onSubmit.bind(this)} formId="signUpForm">
                <TextInput placeholder="Full name" label="Full Name" name="name"/>
                <TextInput placeholder="Email" label="Email" name="email"/>
                <TextInput placeholder="Job title" label="Job Title" name="jobTitle"/>
                <TextInput placeholder="Describe yourself" label="A little about you" name="description"/>
                <TextInput placeholder="01234 567890" label="Telephone" name="phone"/>
                <TextInput placeholder="uk" label="Country of residence" name="country"/>
                
                <br/><br/>
                <h3 className="formHeader">Investment preferences</h3>
                <div className="rowContainer">
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown1" />
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown2"/>
                </div>
                <div className="rowContainer">
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown3"/>
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown4"/>
                </div>
                <div className="rowContainer">
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown5"/>
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown6"/>
                </div>
                <div className="rowContainer">
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown7"/>
                  <Checkbox label="Healthcare" name="investmentSectors" value="unknown8"/>
                </div>
                
                <br/><br/>

                <h3 className="formHeader">Investment size</h3>
                <div className="rowContainer">
                  <Checkbox label="Healthcare" name="investmentSize" value="unknown1"/>
                  <Checkbox label="Healthcare" name="investmentSize" value="unknown2"/>
                </div>
                 <ImageUpload name="image" filenamePrefix="user" onUploadImage={this.onUploadImage.bind(this)}/>

                <br/><br/>


               
              
                <input type="hidden" name="password" value={Math.random() * (Math.random() * 10000000000)} />
                
                <br/><br/>

              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  imageUrl: state.user.imageUrl,
  apiHost:state.setup.apiHost,
  displayError: state.error.showError,
  errorMessage: state.error.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  showError,
  setImageUrl,
  register,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)