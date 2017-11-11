import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer container-fluid">
				<div className="row">
					<div className="col-sm-2 col-sm-offset-1">
						<h5>QVENTURES</h5>
						<a href="/portfolio">PORTFOLIO</a>
						<a href="/contact">CONTACT</a>
						<a href="/faq">FAQ</a>
					</div>
					<div className="col-sm-2">
						<h5>LEGAL</h5>
						<a href="/warning">RISK WARNING</a>
						<a href="/terms">TERMS & CONDITIONS</a>
						<a href="/privacy">PRIVACY</a>
					</div>
					<div className="col-sm-2">
						<h5>SOCIAL</h5>
						<a href="/linkedin">LINKED IN</a>
						<a href="/contact">TWITTER</a>
					</div>
					<div className="col-sm-4">
						<h5>QVENTURES</h5>
						<div className="row">
							<div className="col-sm-6">
								<p className="small">
									29 Portland Place, <br/>
									London, W1 2JU
								</p>
							</div>
							<div className="col-sm-6">
								<p className="small">
									+44 (0)203 0736 921<br />
									london@qventures.co
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row disclaimers">
					<div className="col-sm-5 col-sm-offset-1">
						<p className="small">
							Investing through QVentures involves risks,
							including illiquidity (inability to sell assets
							quickly or without substantial loss in value), lack
							of dividends, loss of your investment and dilution
							and it should be done only as part of a diversified
							portfolio. There is no secondary market available
							meaning that these securities are illiquid. Your
							capital is at risk. QVentures is targeted at
							investors who understand these risks and make their
							own investment decisions. QVentures does not give
							investment advice or provide analysis or
							recommendations regarding investment opportunities.
							Investments can only be made by members of QVentures
							on the basis of information provided. QVentures
							takes no responsibility for this information or for
							any recommendations, opinions or predictions. Please
							click here to read the full risk warning. This site
							has been approved as a financial promotion by
							Resolution Compliance Limited
						</p>
					</div>
					<div className="col-sm-4 col-sm-offset-1">
						<p className="small">
							QVentures is a trading name of Quintessentially
							Ventures Limited, which is an Appointed
							Representative of Resolution Compliance Limited
							which is authorised and regulated by the Financial
							Conduct Authority (FRN 574048). Quintessentially
							Ventures Limited is registered in England and Wales.
							Registered No. 08352180 Registered Address: 29
							Portland Place, London, W1B 1QB
						</p>
					</div>
				</div>
			</div>
		);
	}
}
