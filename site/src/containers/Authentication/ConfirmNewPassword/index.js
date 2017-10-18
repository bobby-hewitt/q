import React, { Component } from 'react'
import style from './style.css'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showError } from '../../../actions/error'
import { setPasswordResetToken, toggleAllowPasswordReset } from '../../../actions/user'
import $ from 'jquery'

class ConfirmNewPassword extends Component {

	componentWillMount(){
		let self = this;
		let token = this.props.location.pathname.replace('/reset/', "")
		this.props.setPasswordResetToken(token)
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `${this.props.apiHost}/user/reset?token=${token}`);
		xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
		  if(xhr.status === 200){
		    const response = JSON.parse(xhr.responseText);
		    if(response.userFound){
		    	self.props.toggleAllowPasswordReset(true)
		    } else {
		    	self.props.showError('This link is invalid or has expired. Enter your email address to reset password')
		    	self.props.toReset()
		    }
		  }
		  else{
		    alert('Error with password reset GET request');
		  }
		}
		};
		xhr.send();
	}

	onSubmit(obj){
		console.log(obj)
		let self = this;
		$.post(this.props.apiHost + '/user/reset', {token: self.props.passwordResetToken, password: obj.password, confirmPassword: obj.confirmPassword}, function(response){
			console.log(response)
			if (response.passwordReset){
				self.props.resetSuccessful()
				self.props.toggleAllowPasswordReset(false)
			} else if (!response.passwordsMatch){
				console.log('no match')
				self.props.showError('Passwords do not match')
			} else {
				this.props.toggleAllowPasswordReset(false)
				self.props.showError('This link is invalid or has expired. Enter your email address to reset password')
		    	self.props.toReset()
			}
		})
	}

	render(){
		return(
			<div className="container">
				{this.props.displayError &&
					<p>{this.props.errorMessage}</p>
				}
				{this.props.allowPasswordReset &&
					<Form submitText="Submit" onSubmit={this.onSubmit.bind(this)} formId="createNewPasswordForm">	         
						<TextInput placeholder="Enter new password" label="password" name="password"/>
						<TextInput placeholder="Confirm new password" label="confirmPassword" name="confirmPassword"/>	       
			        </Form>
				}
			</div>
		)
	}
}


const mapStateToProps = state => ({
	passwordResetToken: state.authenticate.passwordResetToken,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
  	allowPasswordReset: state.authenticate.allowPasswordReset
})

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleAllowPasswordReset,
	setPasswordResetToken,
	showError,
	resetSuccessful: () => push('/'),
	toReset: () => push('/password-reset-request')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmNewPassword)
