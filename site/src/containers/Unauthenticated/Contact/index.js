import React, { Component } from 'react';
import PageHeader from '../../../components/PageHeader';
import Testimonial from '../../../components/Testimonial';
import SectionBox from '../../../components/SectionBox';
import Quote from '../../../components/Quote';
import MemberSquare from '../../../components/MemberSquare';
import ApplySection from '../../../components/ApplySection';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import TextInput from '../../../components/Form/TextInput';
import TextArea from '../../../components/Form/TextArea';
import './style.css';

export default class Contact extends Component {
	render() {
		return (
			<div className="Contact">
				<PageHeader
					title="Contact"
					subline="QVentures is a private members investment club for sophisticated investors."
				/>
				<div className="Contact-section container-fluid">
					<div className="row">
						<div className="col-sm-2 col-sm-offset-1">
							<SectionBox background="#554646" className="dark">
								<h3>Section Title</h3>
							</SectionBox>
						</div>
						<div className="col-sm-6 col-sm-offset-1">
							<h3>For enquiries about our membership process as well as information about our portfolio companies. Send us a message below.</h3>
							<div className="Contact-formContainer">
								<div className="form-group">
									<TextInput 
										label="Full Name"
										placeholder="Full name"
									/>
								</div>
								<div className="form-group">
									<TextInput 
										label="Email"
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<TextArea 
										label="Message"
										placeholder="Message"
									/>
								</div>
								<div className="form-group">
									<Button
										width="220px"
										copy="SEND MESSAGE"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Contact-section container-fluid">
					<div className="row">
						<div className="col-sm-2 col-sm-offset-1">
							<SectionBox background="#CED8DA">
								<h3>Contact</h3>
							</SectionBox>
						</div>
						<div className="col-sm-3 col-sm-offset-1">
							<h5>ADDRESS</h5>
							<p>29 Portland Place,<br/> London, W1 2JU</p>
						</div>
						<div className="col-sm-3">
							<h5>PHONE</h5>
							<p>+44 (0)203 0736 921</p>
							<br/>
							<h5>EMAIL</h5>
							<p>london@qventures.co</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
