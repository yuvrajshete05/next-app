import Head from 'next/head';
import NeoNav from '../components/NeoNav';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>NeoNav — Demo</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<NeoNav />

			<div className="demo-container">
				<section id="home" className="content-section">
					<h1 className="section-title">Advanced Navigation</h1>
					<p className="section-subtitle demo-subtitle">
						Experience the future of web navigation with this sleek, responsive, and feature-rich navigation bar.
					</p>
				</section>

				<section id="about" className="content-section">
					<h2 className="section-title">About Us</h2>
					<p className="section-subtitle">
						We create innovative web experiences that push the boundaries of modern design.
					</p>
				</section>

				<section id="services" className="content-section">
					<h2 className="section-title">Our Services</h2>
					<p className="section-subtitle">
						From responsive navigation bars to complete UI/UX solutions.
					</p>
				</section>

				<section id="portfolio" className="content-section">
					<h2 className="section-title">Portfolio</h2>
					<p className="section-subtitle">Explore our collection of advanced navigation components and modern web designs.</p>
				</section>

				<section id="contact" className="content-section">
					<h2 className="section-title">Contact</h2>
					<p className="section-subtitle">Ready to elevate your web presence? Get in touch.</p>

					<div className="contact-form">
						{/* <form>
							<div className="form-row">
								<div className="form-group">
									<label htmlFor="firstName" className="form-label">First Name</label>
									<input id="firstName" name="firstName" className="form-input" placeholder="Enter your first name" />
								</div>
								<div className="form-group">
									<label htmlFor="lastName" className="form-label">Last Name</label>
									<input id="lastName" name="lastName" className="form-input" placeholder="Enter your last name" />
								</div>
							</div>

							<div className="form-group">
								<label htmlFor="email" className="form-label">Email Address</label>
								<input id="email" name="email" className="form-input" placeholder="Enter your email address" />
							</div>

							<div className="form-group">
								<label htmlFor="subject" className="form-label">Subject</label>
								<input id="subject" name="subject" className="form-input" placeholder="What's this about?" />
							</div>

							<div className="form-group">
								<label htmlFor="message" className="form-label">Message</label>
								<textarea id="message" name="message" className="form-textarea" placeholder="Tell us more about your project..."></textarea>
							</div>

							<button type="submit" className="submit-btn"><span>Send Message</span></button>
						</form> */}
					</div>
				</section>

				<footer className="footer">
					<div className="footer-content">
						<a href="#" className="footer-brand">
							<div className="footer-logo" />
							<span>NeoNav</span>
						</a>

						<ul className="footer-links">
							<li><a href="#home" className="footer-link">Home</a></li>
							<li><a href="#about" className="footer-link">About</a></li>
							<li><a href="#services" className="footer-link">Services</a></li>
							<li><a href="#portfolio" className="footer-link">Portfolio</a></li>
							<li><a href="#contact" className="footer-link">Contact</a></li>
						</ul>

						<div className="footer-social">
							<a href="#" className="social-link" />
							<a href="#" className="social-link" />
							<a href="#" className="social-link" />
						</div>
					</div>
					<div className="footer-copy">© 2025 NeoNav. All rights reserved.</div>
				</footer>
			</div>
		</>
	);
}

