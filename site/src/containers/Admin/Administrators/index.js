import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAdministrators, removeAdminRights } from '../../../actions/admin'
import Administrator from '../../../components/Administrator'
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

	removeAdminRights(id){
		let payload = {
			jwt: this.props.jwt,
			url: this.props.apiHost,
			data: id
		}
		this.props.removeAdminRights(payload)
	}

	render(){
		return(
			<div>
				<SectionHeader section="Administrators" item="post" addNew={false} />
				{this.props.administrators && this.props.administrators.map((administrator, i) => {
					return(
						<Administrator key={i} administrator={administrator} action={this.removeAdminRights.bind(this)} canRemove={this.props.administrators.length > 1}/>
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
	removeAdminRights
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administrators)