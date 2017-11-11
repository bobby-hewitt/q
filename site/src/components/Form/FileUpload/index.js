import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import TextInput from '../TextInput'
import $ from 'jquery'
class FileUpload extends Component {

	constructor(props){
		super(props)
		this.state = {
			label: '',
			browseLabel: 'Browse'
		}
	}

	componentDidMount(){
		let self = this;
		document.getElementById(this.props.name).onchange = (e) => {
			const files = document.getElementById(this.props.name).files;
			if (files.length > 0){
				self.setState({browseLabel: files[0].name})
			}
		}

		$('#falseInput' + self.props.name).click(function(){
			$('#' + self.props.name).click()
		})
	}

	getSignedRequest(file){
		const xhr = new XMLHttpRequest();
		console.log(this.props.filenamePrefix, file.type)
		xhr.open('GET', `${this.props.apiHost}/upload/signImageUpload?file-name=${this.props.filenamePrefix}&file-type=${file.type}`);
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4){
			  if(xhr.status === 200){
			  	console.log('signed request recieved')
			    const response = JSON.parse(xhr.responseText);
			    this.uploadFile(file, response.signedRequest, response.url);
			  }
			  else{
			    alert('Could not get signed URL.');
			  }
			}
		};
		xhr.send();
	}


	uploadFile(file, signedRequest, url){
		let self = this;
		console.log('uploading file', file, signedRequest, url)
	  const xhr = new XMLHttpRequest();
	  xhr.open('PUT', signedRequest);
	  xhr.onreadystatechange = () => {
	  	console.log(xhr)
	    if(xhr.readyState === 4){
	      if(xhr.status === 200){
	      	console.log('file uploaded')
	        self.props.onUploadImage(url, this.state.label)
	        self.setState({browseLabel: 'Browse', label: ''}, () => {
	        	console.log(this.state)
	        })
	      }
	      else{
	        alert('Could not upload file.');
	      }
	    }
	  };
	  xhr.send(file);
	}


	beginUpload(){
		console.log('beginning upload')
		    const files = document.getElementById(this.props.name).files;
		    const file = files[0];
		    if(file === null){
		      return alert('No file selected.');
		    }
		    this.getSignedRequest(file);
	}

	onLabelChange(e){
		this.setState({label: e.target.value})
	}

	render(){
		return(
			<div className="fileUploadContainer">
				<div className="formFalseFileInput" id={"falseInput" + this.props.name}>
					{this.state.browseLabel}
				</div>
				<TextInput name={'fileInputLabel'} value={this.state.label} placeholder="label" onChange={this.onLabelChange.bind(this)}/>
				<div className="uploadButton" onClick={this.beginUpload.bind(this)}>
					
				</div>
			  	<input name={this.props.name} id={this.props.name} type="file" className="fileInput" placeholder={this.props.placeholder} />
			  	<input type="hidden" id="avatar-url" name={this.props.name + 'URL'} value="/images/default.png" />
		  	</div>
		)
	}
} 
	

const mapStateToProps = state => ({
  apiHost:state.setup.apiHost,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload)

