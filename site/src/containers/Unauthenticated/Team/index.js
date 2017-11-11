import React, { Component } from 'react';
import PageHeader from '../../../components/PageHeader';
import Testimonial from '../../../components/Testimonial';
import SectionBox from '../../../components/SectionBox';
import Quote from '../../../components/Quote';
import MemberSquare from '../../../components/MemberSquare';
import ApplySection from '../../../components/ApplySection';
import Footer from '../../../components/Footer';
import './style.css';

export default class Team extends Component {
	render() {
		return (
			<div className="Team">
				<PageHeader
					title="Team"
					subline="QVentures is a private members investment club for sophisticated investors."
				/>
				<div className="Team-section container-fluid">
					<div className="row">
						<div className="col-sm-3 column-flush">
							<MemberSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<MemberSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<MemberSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<MemberSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<MemberSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<MemberSquare />
						</div>
					</div>
				</div>
				
				<ApplySection />
				<Footer />
			</div>
		);
	}
}
