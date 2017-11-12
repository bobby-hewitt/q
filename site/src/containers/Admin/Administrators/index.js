import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAdministrators, removeAdminRights } from '../../../actions/admin'
import AdminTopLevelPersonRecord from '../../../components/AdminTopLevelPersonRecord'
import './style.css'

import SectionHeader from '../SectionHeader'

class Administrators extends Component {


	
	componentWillMount(){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
		
		}
		this.props.getAdministrators(payload)
	}

	createAdmin(){
		console.log('asda')
		this.props.addAdmin()
	}



	goToAdministrator(id){
		this.props.goToAdministrator(id)
	}

	render(){
		return(
			<div>
				<SectionHeader section="Administrators" addNew={true} action={this.createAdmin.bind(this)}/>
				{this.props.administrators && this.props.administrators.map((administrator, i) => {
					return(
						<AdminTopLevelPersonRecord key={i} person={administrator} action={this.goToAdministrator.bind(this)} canRemove={this.props.administrators.length > 1}/>
					)
				})

				}	
			</div>
		)
	}
}

const mapStateToProps = state => ({
	administrators: state.admin.administrators,
	jwt: state.authenticate.token,
	users: state.admin.users,
	apiHost:state.setup.apiHost,
	displayError: state.error.showError,
  	errorMessage: state.error.errorMessage,


})

const mapDispatchToProps = dispatch => bindActionCreators({
	getAdministrators,
	removeAdminRights,
	addAdmin: () => push('/admin/administrators/add'),
	goToAdministrator: (id) => push('/admin/administrator/' + id)
	
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administrators)