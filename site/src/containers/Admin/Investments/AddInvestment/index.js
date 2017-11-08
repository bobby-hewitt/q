import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { removeInvestmentFromState } from '../../../../actions/cleanup'
import { submitNewInvestment, editInvestmentInputValue, addInvestmentFile, deleteInvestmentFile, deleteInvestment, editInvestmentUpdateInputValue } from '../../../../actions/admin'
import Form from '../../../../components/Form'
import TextInput from '../../../../components/Form/TextInput'
import FileUpload from '../../../../components/Form/FileUpload'
import ImageUpload from '../../../../components/Form/ImageUpload'
import TextArea from '../../../../components/Form/TextArea'
import Section from '../../../../components/Form/Section'
import formatDate from '../../../../helpers/formatDate'


class AddInvestment extends Component {


	onSubmit(obj){
		obj.id = this.props.investment._id
		obj.files = this.props.investment.files
		let newUpdates = Object.assign([], this.props.investment.updates)
		if (obj.newUpdate.length > 0){
			newUpdates.push({
				copy: obj.newUpdate,
				timestamp: (new Date).getTime()
			})
		}
		obj.updates = newUpdates

		let payload = {
			jwt: this.props.jwt,
			data: obj,
			url: this.props.apiHost
		}
		console.log(obj)
		this.props.submitNewInvestment(payload)
	}

	onChange(e){
		let obj = {
			target : e.target.name,
			value : e.target.value
		}
		this.props.editInvestmentInputValue(obj)
	}

	onUpdateChange(index, e){
		let payload = {
			index,
			value: e.target.value
		}
		this.props.editInvestmentUpdateInputValue(payload)
	}

	onUploadFiles(url, label){
		// document.getElementById('newInvestmentImageUrl').value = url
		let obj = {
			target: label,
			value :url
		}
		this.props.editInvestmentInputValue(obj)
		this.props.addInvestmentFile(obj)
	}

	onUploadImage(url){
		let obj = {
			target: 'imageUrl',
			value :url
		}
		this.props.editInvestmentInputValue(obj)
	}

	deleteFile(index){
		this.props.deleteInvestmentFile(index)
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
		console.log(this.props)
		let investment = this.props.investment
		let title = investment.title
		let files = investment.files
		let imageUrl = investment.imageUrl
		let videoUrl = investment.videoUrl
		//to add to model
		let financeTarget = investment.financeTarget
		let financePreMoneyVal = investment.financePreMoneyVal
		let financeRevenue = investment.financeRevenue
		let financeComittedFunds = investment.financeComittedFunds
		let financeMinimumInvestment = investment.financeMinimumInvestment
		let description = investment.description
		let feature1 = investment.feature1
		let feature2 = investment.feature2
		let feature3 = investment.feature3
		let updates = investment.updates
		let newUpdate = investment.newUpdate
		
		return(
			<div>
				<Form 
					submitText="Submit" 
					onSubmit={this.onSubmit.bind(this)} 
					formId="createNewInvestmentForm" 
					name="createNewInvestmentForm"
					hasDelete={this.props.location.pathname.indexOf('edit') > 0}
					deleteAction={this.deleteInvestment.bind(this, investment._id)}>	         
						<div className="row">
							<div className="col-md-3">
								<ImageUpload name="investmentImage" value={imageUrl} filenamePrefix="investment-image" onUploadImage={this.onUploadImage.bind(this)}/>
							</div>						
							<div className="col-md-9">
								
								<Section title="Basic details" />
								<TextInput placeholder="Investment title" value={title} label="password" name="title" onChange={this.onChange.bind(this)}/>
								<TextArea formId="createNewInvestmentForm" label="Company description" name="description" value={description} onChange={this.onChange.bind(this)}/>
								<TextInput value={videoUrl} label="Video URL" name="videoUrl" onChange={this.onChange.bind(this)}/>
								
								<Section title="Finances" />
								<div className="rowContainer">
									<TextInput name="financeTarget" value={financeTarget} placeholder=""  label="Target" onChange={this.onChange.bind(this)}/>
									<TextInput name="financePreMoneyVal" value={financePreMoneyVal} placeholder=""  label="Pre Money Val" onChange={this.onChange.bind(this)}/>
								</div>
								<div className="rowContainer">
									<TextInput name="financeRevenue" value={financeRevenue} placeholder=""  label="Revenue" onChange={this.onChange.bind(this)}/>
									<TextInput name="financeComittedFunds" value={financeComittedFunds} placeholder=""  label="Comitted Funds" onChange={this.onChange.bind(this)}/>
								</div>

								<div className="rowContainer">
									<TextInput name="financeMinimumInvestment" value={financeMinimumInvestment} placeholder=""  label="Minimum Investment" onChange={this.onChange.bind(this)}/>
								</div>
									
								<Section title="Files" />
								<FileUpload name="investmentFiles" filenamePrefix="investment-files" onUploadImage={this.onUploadFiles.bind(this)}/>
								{investment.files && investment.files.length > 0 && investment.files.map((file, i ) => {
									return(
										<div key={i} className="uploadedFilesContainer">
											<p>{file.target}</p>
											<div className="deleteFileContainer" onClick={this.deleteFile.bind(this, i)}>
											</div>
										</div>
									)
								})}
								{(!investment.files || investment.files.length === 0) &&
									<div className="uploadedFilesContainer">
										<p>There are not yet any files associated with this investment</p>
									</div>
								}
								<Section title="Interesting Features" />
								<TextArea formId="createNewInvestmentForm" label="Feature 1" name="feature1" value={feature1} onChange={this.onChange.bind(this)}/>
								<TextArea formId="createNewInvestmentForm" label="Feature 2" name="feature2" value={feature2} onChange={this.onChange.bind(this)}/>
								<TextArea formId="createNewInvestmentForm" label="Feature 2" name="feature3" value={feature3} onChange={this.onChange.bind(this)}/>
								

								<Section title="Updates " />
								<div>
								{updates && updates.map((update, i) => {
									return(
										<div key={i} className="row">
											<div className="col-md-2">
											{formatDate(update.timestamp)}
											</div>
											<div className="col-md-10">
												<TextArea formId="createNewInvestmentForm" label={"Update " + (parseInt(i) + 1)} name={"update" + i} value={update.copy} onChange={this.onUpdateChange.bind(this, i)}/>
											</div>
										</div>
									)
								})}
								</div>
								
								<TextArea formId="createNewInvestmentForm" label="New Update" name="newUpdate" placeholder="Type update here. If left blank no updates will be posted" value={newUpdate} onChange={this.onChange.bind(this)}/>
							</div>
						</div>  
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
	addInvestmentFile,
	editInvestmentUpdateInputValue,
	deleteInvestmentFile,
	deleteInvestment,
	removeInvestmentFromState,
	submitNewInvestment,
	editInvestmentInputValue,
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInvestment)