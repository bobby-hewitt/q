import React, { Component } from 'react';
import PageHeader from '../../../components/PageHeader';
import Testimonial from '../../../components/Testimonial';
import SectionBox from '../../../components/SectionBox';
import Quote from '../../../components/Quote';
import PortfolioSquare from '../../../components/PortfolioSquare';
import ApplySection from '../../../components/ApplySection';
import Footer from '../../../components/Footer';
import './style.css';

export default class Portfolio extends Component {
	render() {
		return (
			<div className="Portfolio">
				<PageHeader
					title="Portfolio"
					subline="QVentures is a private members investment club for sophisticated investors."
				/>
				<div className="Portfolio-filters container-fluid">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3 text-center">
							<span className="snack"></span>
							<h1>56 Companies </h1>
							<p>Ranging from company name to company name. We've invested etc.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 text-center">
							<h5>SECTOR</h5>
							<h5>SECTOR</h5>
							<h5>SECTOR</h5>
							<h5>SECTOR</h5>
							<h5>SECTOR</h5>
						</div>
					</div>
				</div>
				<div className="Portfolio-section container-fluid">
					<div className="row">
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
						<div className="col-sm-3 column-flush">
							<PortfolioSquare />
						</div>
					</div>
				</div>
				
				<ApplySection />
				<Footer />
			</div>
		);
	}
}
