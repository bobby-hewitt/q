import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import TitleSection from '../../../components/TitleSection';
import Button from '../../../components/Button';
import SectionBox from '../../../components/SectionBox';
class Home extends Component {
	render() {
		return (
			<div className="container-fluid Home">
				<div className="row">
					<div className="col-md-6 ">
						<TitleSection
							minHeight={window.innerWidth / 2}
							vPadding={100}
							title="Title section"
							subTitle="this is a subtitle"
							background="black"
							color="white"
						/>
					</div>
					<div className="col-md-6">
						<TitleSection
							minHeight={window.innerWidth / 2}
							vPadding={100}
							color="black"
							background="white"
							title="A private members club for sophisticated investors"
							background="white"
						>
							<Button
								width="200px"
								copy="This is a button"
								color="white"
								background="black"
							/>
						</TitleSection>
					</div>
				</div>
				<div className="row Home-description">
					<div className="col-md-5 col-md-offset-1">
						<h3>
							QVentures is a private members investment club for
							sophisticated investors.
						</h3>
						<h3>
							Membership provides access to curated co-investment
							opportunities in early-stage companies alongside the
							most trusted and successful investors in the market.
						</h3>
						<h3>
							We partner with the Quintessentially Group, one of
							the world’s largest networks of engaged HNWIs.
						</h3>
					</div>
					<div className="col-md-5 col-md-offset-1">
						<SectionBox background="blue" />
					</div>
				</div>
				<div className="row Home-membership">
					<div className="col-sm-2 col-sm-offset-1">
						<SectionBox background="blue" />
					</div>
					<div className="col-sm-5 col-sm-offset-1">
						<div className="row">
							<div className="col-sm-12">
								<h3>
									Membership consists of a strictly vetted
									community of angel investors, fund managers
									and entrepeneur investors
								</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-5">
								<h5>BENEFITS</h5>
								<p>
									Invest in deals that are backed by some of
									the most trusted and successful investors in
									the market.
								</p>
								<p>
									Minimum investment size is £25k per investment.
								</p>
								<p>
									Ability to follow-on in further funding rounds if appropriate.
								</p>
								<p>
									Members must be comfortable investing in a portfolio of unlisted securities.
								</p>
							</div>
							<div className="col-sm-5 col-sm-offset-1">
								<h5>CRITERIA</h5>
								<p>
									Members are vetted in person or over the telephone.
								</p>
								<p>
									Investors Only: must be able to deploy funds, no intermediaries.
								</p>
								<p>
									Minimum investment size is £25k per investment.
								</p>
								<p>
									Ability to follow-on in further funding rounds if appropriate.
								</p>
								<p>
									Members must be comfortable investing in a portfolio of unlisted securities.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row Home-benefits">
					<div className="col-sm-6">
						<h1>3</h1>
						<h3>Ancillary Benefits</h3>
						<p>
							In addition to curated dealflow, our
							membership provides access to a toptier
							club of like-minded individuals, delivering value in the form of new business relationships, non-exec placements and other ancillary benefits.
						</p>
						<p>
							Being part of the Quintessentially Group,
							members get access to exclusive enterprise,
							luxury and charity events around the world. 
						</p>
					</div>
					<div className="col-sm-6">
						<h1>3</h1>
						<h3>Ancillary Benefits</h3>
						<p>
							In addition to curated dealflow, our
							membership provides access to a toptier
							club of like-minded individuals, delivering value in the form of new business relationships, non-exec placements and other ancillary benefits.
						</p>
						<p>
							Being part of the Quintessentially Group,
							members get access to exclusive enterprise,
							luxury and charity events around the world. 
						</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
