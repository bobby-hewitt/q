import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { removeInvestmentFromState } from '../../../../actions/cleanup'
import { submitNewInvestment, editInvestmentInputValue, deleteInvestment } from '../../../../actions/admin'
import Form from '../../../../components/Form'
import TextInput from '../../../../components/Form/TextInput'
import FileUpload from '../../../../components/Form/FileUpload'

class AddInvestment extends Component {

	onSubmit(obj){
		obj.id = this.props.investment._id
		let payload = {
			jwt: this.props.jwt,
			data: obj,
			url: this.props.apiHost
		}
		this.props.submitNewInvestment(payload)
	}

	onChange(e){
		let obj = {
			target : e.target.name,
			value : e.target.value
		}
		this.props.editInvestmentInputValue(obj)
	}

	onUploadImage(url){
		// document.getElementById('newInvestmentImageUrl').value = url
		let obj = {
			target : 'imageUrl',
			value :url
		}
		this.props.editInvestmentInputValue(obj)
	}

	deleteInvestment(investment){		
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: {investmentId: investment}
		}
		this.props.deleteInvestment(payload)
	}

	componentWillUnmount(){
		this.props.removeInvestmentFromState()
	}

	render(){
		let investment = this.props.investment
		let title = investment.title
		let imageUrl = investment.imageUrl
		let videoUrl = investment.videoUrl
		
		return(
			<div>
				<Form 
					submitText="Submit" 
					onSubmit={this.onSubmit.bind(this)} 
					formId="createNewInvestmentForm" 
					name="createNewInvestmentForm"
					hasDelete={this.props.location.pathname.indexOf('edit') > 0}
					deleteAction={this.deleteInvestment.bind(this, investment._id)}>	         
						<TextInput placeholder="Investment title" value={title} label="password" name="title" onChange={this.onChange.bind(this)}/>
						<FileUpload name="investmentImage" filenamePrefix="investment" onUploadImage={this.onUploadImage.bind(this)}/>
						<TextInput name="videoUrl" value={videoUrl} placeholder="Video URL"  label="Video URL" onChange={this.onChange.bind(this)}/>	 
						<input type="hidden" name="imageUrl" id="newInvestmentImageUrl" value={imageUrl} />      
			    </Form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	investment: state.investments.investment,
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	deleteInvestment,
	removeInvestmentFromState,
	submitNewInvestment,
	editInvestmentInputValue,
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInvestment)