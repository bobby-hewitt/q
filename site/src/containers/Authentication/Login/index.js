import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import FileUpload from '../../../components/Form/FileUpload'

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
      <div className="loginFormContainer">
      	{this.props.displayError &&
      		<h3>{this.props.errorMessage}</h3>
      	}
        <Form submitText="Submit" onSubmit={this.onSubmit.bind(this)} formId="loginForm">
          <TextInput placeholder="Email" label="email" name="username"/>
          <TextInput placeholder="Password" label="password" name="password"/>
        </Form>
        <p onClick={this.props.resetPassword}>Forgotten your password?</p>
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