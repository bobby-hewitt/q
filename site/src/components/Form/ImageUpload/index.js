import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import $ from 'jquery'

class ImageUpload extends Component {


	constructor(props){
		super(props)
		this.state = {
			imageUrl: 'https://maxcdn.icons8.com/Share/icon/p1em/Users//user1600.png'
		}
	}

	componentWillMount(){
		if (this.props.value === ''){
			this.setState({imageUrl: 'https://maxcdn.icons8.com/Share/icon/p1em/Users//user1600.png'})
		} else {
			this.setState({imageUrl: this.props.value})
		}
	}

	componentDidMount(){
		let self = this;
		document.getElementById(this.props.name).onchange = () => {
			console.log(self.props)
		    const files = document.getElementById(this.props.name).files;
		    const file = files[0];
		    if(file === null){
		      return alert('No file selected.');
		    }
		    this.getSignedRequest(file);
		}

		$('#falseImageInput').click(function(){
			$('#' + self.props.name).click()
		})
	}



	getSignedRequest(file){
		console.log(file)
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `${this.props.apiHost}/upload/signImageUpload?file-name=${this.props.filenamePrefix}&file-type=${file.type}`);
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
	      	self.setState({imageUrl: url}, () => {
	      		console.log(self.state.imageUrl)
	      	})
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
				<div className="uploadImageContainer" style={{backgroundImage: "url('" + this.state.imageUrl + "')"}}>
				</div>
				<div className="uploadImageButton" id="falseImageInput">Choose Image</div>
			  	<input name={this.props.name} id={this.props.name} type="file" className="fileInput" placeholder={this.props.placeholder} />
			  	
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
)(ImageUpload)