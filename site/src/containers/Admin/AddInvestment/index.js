import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { submitNewInvestment } from '../../../actions/admin'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import FileUpload from '../../../components/Form/FileUpload'

class AddInvestment extends Component {

	onSubmit(obj){
		let payload = {
			jwt: this.props.jwt,
			data: obj,
			url: this.props.apiHost
		}
		this.props.submitNewInvestment(payload)
	}

	onUploadImage(url){
		document.getElementById('newInvestmentImageUrl').value = url
		console.log(url)
	}

	render(){
		return(
			<div>
				<h3>Add i</h3>
				<Form submitText="Submit" onSubmit={this.onSubmit.bind(this)} formId="createNewInvestmentForm" name="createNewInvestmentForm">	         
					<TextInput placeholder="Hi" label="password" name="investmentTitle"/>
					<FileUpload name="investmentImage" filenamePrefix="investment" onUploadImage={this.onUploadImage.bind(this)}/>
					<TextInput name="investmentVideo" placeholder="Video URL"  label="confirmPassword"/>	 
					<input type="hidden" name="newInvestmentImageUrl" id="newInvestmentImageUrl" value="" />      
			    </Form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	submitNewInvestment
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInvestment)