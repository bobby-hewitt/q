import React, { Component } from 'react';
import PageHeader from '../../components/PageHeader';
import Testimonial from '../../components/Testimonial';
import SectionBox from '../../components/SectionBox';
import Quote from '../../components/Quote';
import InvestmentSquare from '../../components/InvestmentSquare';
import ApplySection from '../../components/ApplySection';
import Footer from '../../components/Footer';
import './style.css';

export default class Investments extends Component {
	render() {
		return (
			<div className="Investments">
				<PageHeader
					title="Investments"
					subline="QVentures is a private members investment club for sophisticated investors."
				/>
				<div className="Investments-filters container-fluid">
					<div className="row">
						<div className="col-sm-1 text-right">
							Filter
						</div>
						<div className="col-sm-3 text-right">
							Search
						</div>
						<div className="col-sm-2 text-right">
							Sector
						</div>
						<div className="col-sm-2 text-right">
							Investment Type
						</div>
						<div className="col-sm-2 text-right">
							Sort by
						</div>
					</div>
				</div>
				<div className="Investments-section container-fluid">
					<div className="row">
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
						<div className="col-sm-4 column-flush">
							<InvestmentSquare />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
