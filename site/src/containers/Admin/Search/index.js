import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'



class Search extends Component {

	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
	}

	onChange(e){
		this.setState({value: e.target.value})
	}

	detectReturn(event){
		if (event.which == 13 || event.keyCode == 13) {
        	this.props.onSearch(this.state.value)
        	return 
    	}
    	return
	}

	render(){
		return(
			<div className="adminSearchContainer">
				<input id="adminSearchInput" type="text" placeholder="Search" onKeyPress={this.detectReturn.bind(this)}className="searchBar" value={this.state.value} onChange={this.onChange.bind(this)}/>
				<div className="searchButton" onClick={this.props.onSearch.bind(this, this.state.value)} ></div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	jwt: state.authenticate.token,
	applicants: state.applicants.applicants,
	passwordResetToken: state.authenticate.passwordResetToken,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
  	allowPasswordReset: state.authenticate.allowPasswordReset
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)