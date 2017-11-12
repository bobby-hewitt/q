import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import FileUpload from '../../../components/Form/FileUpload'
import TitleSection from '../../../components/TitleSection'
import './style.css'
import $ from 'jquery'
import { login, logout, authenticateWithJWT } from '../../../actions/user'

class Login extends Component {

	componentWillMount(){
    this.props.logout()
	// 	if (this.props.authToken && this.props.authToken.length > 0){
	// 		let payload = {
	// 			url: this.props.apiHost,
	// 			payload: this.props.authToken
	// 		}
	// 		this.props.authenticateWithJWT(payload)
	// 	}
	}

  onSubmit(payload){
    let data = {
      url: this.props.apiHost,
      payload: payload,
      redirect: this.props.redirectTo ? this.props.redirectTo : '/'
    }
    this.props.login(data)
  }


  render(){
    return(
      <div>
      <div className="container-fluid Home flush">
        <div className="row">
          <div className="col-md-6">
            <TitleSection
              minHeight={window.innerWidth / 2}
              vPadding={100}
              background="#1F3134"
              color="white"
            >
            </TitleSection>
          </div>
          <div className="col-md-6 column-flush">
            <TitleSection
              minHeight={window.innerWidth / 2}
              vPadding={100}
              color="black"
              background="white"
             
              background="white"
            >
             <div className="loginFormContainer">
        {this.props.displayError &&
          <h3>{this.props.errorMessage}</h3>
        }
        <Form submitText="Login" onSubmit={this.onSubmit.bind(this)} formId="loginForm">
          <TextInput placeholder="Email" label="Email" name="username"/>
          <TextInput placeholder="Password" label="Password" name="password"/>

        </Form>
         <p className="loginPasswordReset" onClick={this.props.resetPassword}>Forgotten your password?</p>
      </div>
            </TitleSection>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  redirectTo: state.authenticate.redirectTo,
	authToken: state.authenticate.token,
  apiHost:state.setup.apiHost,
  displayError: state.error.showError,
  errorMessage: state.error.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateWithJWT,
  logout,
  login,
  resetPassword: () => push('/password-reset-request'),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)