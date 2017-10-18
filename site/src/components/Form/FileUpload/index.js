import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

class FileUpload extends Component {

	componentDidMount(){
		document.getElementById(this.props.name).onchange = () => {
		    const files = document.getElementById(this.props.name).files;
		    const file = files[0];
		    if(file === null){
		      return alert('No file selected.');
		    }
		    this.getSignedRequest(file);
		}
	}

	getSignedRequest(file){
		console.log(file)
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `${this.props.apiHost}/upload/signImageUpload?file-name=${file.name}&file-type=${file.type}`);
		xhr.onreadystatechange = () => {
		if(xhr.readyState === 4){
		  if(xhr.status === 200){
		  	console.log(xhr.responseText)
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
	  const xhr = new XMLHttpRequest();
	  xhr.open('PUT', signedRequest);
	  xhr.onreadystatechange = () => {
	    if(xhr.readyState === 4){
	      if(xhr.status === 200){
	        self.props.onUploadImage(url)
	      }
	      else{
	        alert('Could not upload file.');
	      }
	    }
	  };
	  xhr.send(file);
	}

	render(){
		return(
			<div>
			  	<input name={this.props.name} id={this.props.name}type="file" className="fileInput" placeholder={this.props.placeholder} />
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

