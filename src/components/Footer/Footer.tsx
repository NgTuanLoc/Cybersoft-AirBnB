import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineSkype,
} from 'react-icons/ai';
import { Container } from './style';

const Footer = () => {
	return (
		<Container>
			<div className='links'>
				<div className='link'>
					<h3>Support</h3>
					<ul>
						<li>Help Center</li>
						<li>AirCover</li>
						<li>Safety information</li>
						<li>Supporting people with disabilities</li>
						<li>Cancellation options</li>
						<li>Cancellation options</li>
						<li>Our COVID-19 Response</li>
						<li>Report a neighborhood concern</li>
					</ul>
				</div>
				<div className='link'>
					<h3>Community</h3>
					<ul>
						<li>Airbnb.org: disaster relief housing</li>
						<li>Support Afghan refugees</li>
						<li>Combating discrimination</li>
					</ul>
				</div>
				<div className='link'>
					<h3>Hosting</h3>
					<ul>
						<li>Try hosting</li>
						<li>AirCover for Hosts</li>
						<li>Explore hosting resources</li>
						<li>Visit our community forum</li>
						<li>How to host responsibly</li>
					</ul>
				</div>
				<div className='link'>
					<h3>Airbnb</h3>
					<ul>
						<li>Newsroom</li>
						<li>Learn about new features</li>
						<li>Letter from our founders</li>
						<li>Careers</li>
						<li>Investors</li>
						<li>Gift cards</li>
					</ul>
				</div>
			</div>
			<div className='line'></div>
			<div className='social'>
				<h4>
					&copy;{new Date().getFullYear()} Airbnb,Inc &middot; Privacy &middot;
					Terms &middot; Sitemap
				</h4>
				<h4>
					<a href='https://github.com/thaiduy1704'>
						<AiOutlineFacebook />
					</a>
					<a href='https://github.com/thaiduy1704'>
						<AiOutlineTwitter />
					</a>
					<a href='https://github.com/thaiduy1704'>
						<AiOutlineInstagram />
					</a>
					<a href='https://github.com/thaiduy1704'>
						<AiOutlineSkype />
					</a>
				</h4>
			</div>
		</Container>
	);
};

export default Footer;
