import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import TitleSection from '../../../components/TitleSection';
import Button from '../../../components/Button';
import SectionBox from '../../../components/SectionBox';
import MemberSquare from '../../../components/MemberSquare';
import ApplySection from '../../../components/ApplySection';
import Footer from '../../../components/Footer';

class Home extends Component {
	render() {
		return (
			<div className="container-fluid Home flush">
				<div className="row">
					<div className="col-md-6">
						<TitleSection
							minHeight={window.innerWidth / 2}
							vPadding={100}
							background="#1F3134"
							color="white"
						>
						</TitleSection>
					</div>
					<div className="col-md-6 column-flush">
						<TitleSection
							minHeight={window.innerWidth / 2}
							vPadding={100}
							color="black"
							background="white"
							title="A private members club for sophisticated investors"
							background="white"
						>
							<Button
								width="220px"
								copy="APPLY FOR MEMBERSHIP"
							/>
						</TitleSection>
					</div>
				</div>
				<div className="row Home-description page-section">
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
						<SectionBox background="#554646" className="dark">
							<h1>1</h1>
							<p>Who we are</p>
						</SectionBox>
					</div>
				</div>
				<div className="Home-membership">
					<span className="border"></span>
					<div className="row">
						<div className="col-sm-2 col-sm-offset-1">
							<SectionBox background="#CED8DA">
								<h1>2</h1>
								<p>Membership</p>
							</SectionBox>
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
										Minimum investment size is £25k per
										investment.
									</p>
									<p>
										Ability to follow-on in further funding
										rounds if appropriate.
									</p>
									<p>
										Members must be comfortable investing in a
										portfolio of unlisted securities.
									</p>
								</div>
								<div className="col-sm-5 col-sm-offset-1">
									<h5>CRITERIA</h5>
									<p>
										Members are vetted in person or over the
										telephone.
									</p>
									<p>
										Investors Only: must be able to deploy
										funds, no intermediaries.
									</p>
									<p>
										Minimum investment size is £25k per
										investment.
									</p>
									<p>
										Ability to follow-on in further funding
										rounds if appropriate.
									</p>
									<p>
										Members must be comfortable investing in a
										portfolio of unlisted securities.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row Home-benefits">
					<div className="col-sm-6 Home-benefits-blue">
						<div className="Home-benefits-container">
							<h1>3</h1>
							<h3 className="semi">Ancillary Benefits</h3>
							<h3>
								In addition to curated dealflow, our membership
								provides access to a toptier club of like-minded
								individuals, delivering value in the form of new
								business relationships, non-exec placements and
								other ancillary benefits.
							</h3>
							<h3>
								Being part of the Quintessentially Group, members
								get access to exclusive enterprise, luxury and
								charity events around the world.
							</h3>
						</div>
					</div>
					<div className="col-sm-6 column-flush">
						<div className="Home-benefits-container">
							<h1>4</h1>
							<h3 className="semi">Member Engagement</h3>
							<h3>
								We host regular investor meetings in London and
								foster a club environment that provides best
								practice sharing and where there is a spirit of give
								and gain.
							</h3>
							<h3>
								Members are invited to an online platform where they
								can benefit from access to the latest deals and a
								full member directory. The calibre of our membership
								attracts the most promising entrepreneurs.
							</h3>
						</div>
					</div>
				</div>
				<div className="Home-members">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3 text-center">
							<span className="snack" />
							<h1>A Selection of our QVentures Members</h1>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
