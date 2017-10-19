import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { getInvestments } from '../../../actions/admin'
import Form from '../../../components/Form'
import TextInput from '../../../components/Form/TextInput'
import FileUpload from '../../../components/Form/FileUpload'



class ManageInvestments extends Component {

	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost
		}
		this.props.getInvestments(payload)
	}

	
	render(){
		return(
			<div>
				<h3>Manage i</h3>
				{this.props.investments && this.props.investments.map((investment, i) => {
					return(
						<div key={i} className="investmentContainer">
							<h3>{investment.title}</h3>
							<div className="investmentImage" style={{backgroundImage: "url('" + investment.imageUrl + "')"}} />
						</div>
					)
				})

				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	investments: state.admin.investments,
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getInvestments
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageInvestments)