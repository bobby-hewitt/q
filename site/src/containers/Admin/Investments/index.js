import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { getInvestments, editInvestment } from '../../../actions/admin'
import Investment from '../../../components/Investment'
import SectionHeader from '../SectionHeader'
import Search from '../Search'

class ManageInvestments extends Component {

	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost
		}
		this.props.getInvestments(payload)
	}

	editInvestment(investment){
		console.log('editing investment')
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: investment
		}
		this.props.editInvestment(payload)
	}

	addNew(){
		this.props.addInvestment()
	}

	updateInvestments(value){
		let param = value !== '' ? value : null
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			param
		}
		this.props.getInvestments(payload)
	}

	
	render(){
		return(
			<div>
				<SectionHeader section="Investments" addNew={true} action={this.addNew.bind(this)} />
				<Search onSearch={this.updateInvestments.bind(this)} />
					{this.props.investments && this.props.investments.map((investment, i) => {
						return(
							<Investment investment={investment} editInvestment={this.editInvestment.bind(this)} key={i} admin={true} />
						)
					})
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	investments: state.investments.investments,
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	editInvestment,
	getInvestments,
	addInvestment: () => push('/admin/investments/add')
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageInvestments)