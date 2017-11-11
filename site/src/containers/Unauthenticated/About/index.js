import React, { Component } from 'react';
import PageHeader from '../../../components/PageHeader';
import Testimonial from '../../../components/Testimonial';
import SectionBox from '../../../components/SectionBox';
import Quote from '../../../components/Quote';
import MemberSquare from '../../../components/MemberSquare';
import ApplySection from '../../../components/ApplySection';
import Footer from '../../../components/Footer';
import './style.css';

export default class About extends Component {
	render() {
		return (
			<div className="About">
				<PageHeader
					title="About"
					subline="QVentures is a private members investment club for sophisticated investors."
				/>
				<Testimonial />
				<div className="About-section container-fluid">
					<div className="row">
						<div className="col-sm-2 col-sm-offset-1">
							<SectionBox background="#554646" className="dark">
								<h3>Section Title</h3>
							</SectionBox>
						</div>
						<div className="col-sm-4 col-sm-offset-1">
							<h3>
								In addition to curated dealflow, our membership
								provides access to a toptier club of like-minded
								individuals, delivering value in the form of new
								business relationships, non-exec placements and
								other ancillary benefits.
							</h3>
							<h3>
								Being part of the Quintessentially Group,
								members get access to exclusive enterprise,
								luxury and charity events around the world.Being
								part of the Quintessentially Group, members get
								access to exclusive enterprise, luxury and
								charity events around the world.
							</h3>
						</div>
					</div>
				</div>
				<Quote />
				<div className="Home-members">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3 text-center">
							<span className="snack" />
							<h1>Our founding members</h1>
							<p>
								Our trusted Founder Members act as advisors,
								ambassadors and investors for the club.
							</p>
							<br />
							<br />
						</div>
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
				<ApplySection />
				<Footer />
			</div>
		);
	}
}
