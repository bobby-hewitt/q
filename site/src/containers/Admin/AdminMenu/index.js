import React, { Component } from 'react'
import $ from 'jquery'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { adminMenuItemClick } from '../../../actions/admin'
import AdminMenuButton from './AdminMenuButton'

class AdminMenu extends Component{

	menuItemSelected(menuItem){
		this.props.adminMenuItemClick(menuItem)
	}

	render(){
		return(
			<div className="adminMenuContainer">
				<h3>QVentures</h3>
				<AdminMenuButton copy="Investments" isActive={this.props.menuItem === 'investments'} buttonId="investments" action={this.menuItemSelected.bind(this)}/>
				<AdminMenuButton copy="Applicants" isActive={this.props.menuItem === 'applicants'} buttonId="applicants" action={this.menuItemSelected.bind(this)}/>	
				<AdminMenuButton copy="Members" isActive={this.props.menuItem === 'members'} buttonId="members" action={this.menuItemSelected.bind(this)}/>
				<AdminMenuButton copy="Events" isActive={this.props.menuItem === 'events'} buttonId="events" action={this.menuItemSelected.bind(this)}/>
				<AdminMenuButton copy="Noticeboard" isActive={this.props.menuItem === 'noticeboard'} buttonId="noticeboard" action={this.menuItemSelected.bind(this)}/>
				<AdminMenuButton copy="Administrators" isActive={this.props.menuItem === 'administrators'} buttonId="administrators" action={this.menuItemSelected.bind(this)}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAdmin: state.admin.isAdmin,
	menuItem: state.admin.menuItem
})

const mapDispatchToProps = dispatch => bindActionCreators({
	adminMenuItemClick
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminMenu)