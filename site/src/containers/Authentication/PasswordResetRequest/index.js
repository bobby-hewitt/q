import React, { Component } from 'react'
import style from './style.css'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { passwordResetRequest } from '../../../actions/user'
import { hideError } from '../../../actions/error'
class PasswordResetRequest extends Component {

	constructor(props){
		super(props)
		this.state ={
			submittedRequest: false
		}
	}

	onSubmit(payload){
		let obj = {
			url: this.props.apiHost,
			payload: payload
		}
		this.props.passwordResetRequest(obj)
		this.setState({submittedRequest: true, email: payload.email})
		console.log('submitting pw reset req')
		this.props.hideError()
	}

	render(){
		return(
			<div className="container">
			{this.state.submittedRequest &&
				<p>An email has been sent to {this.state.email}.  Please follow the link to reset your password. The link will expire in one hour.</p>
			}
			{this.props.displayError &&
				<p>{this.props.errorMessage}</p>
			}
			{!this.state.submittedRequest &&
				<Form submitText="Submit" onSubmit={this.onSubmit.bind(this)} formId="passwordResetRequest">
		          <TextInput placeholder="Email" label="email" name="email"/>
		        </Form>
		    }
			</div>
		)
	}
}

const mapStateToProps = state => ({
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
	errorMessage: state.error.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
	hideError,
	passwordResetRequest
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordResetRequest)