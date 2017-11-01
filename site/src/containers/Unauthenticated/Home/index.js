import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import TitleSection from '../../../components/TitleSection'
import Button from '../../../components/Button'
import SectionBox from '../../../components/SectionBox'
class Home extends Component {

	

	render(){
		

		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 ">
						<TitleSection 
							minHeight={window.innerWidth /2}
							vPadding={100}
							title="Title section"
							subTitle="this is a subtitle"
							background="black"
							color="white" />
					</div>
					<div className="col-md-6">
						<TitleSection 
							minHeight={window.innerWidth /2}
							vPadding={100}
							color="black"
							background="white"
							title="A private members club for sophisticated investors"
							background="white">
							<Button 
								width="200px"
								copy="This is a button"
								color="white"
								background="black"/>
						</TitleSection>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-md-offset-1">
					<SectionBox 
						background="blue"/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)