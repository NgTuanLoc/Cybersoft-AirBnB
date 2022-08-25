import { Link } from 'react-router-dom';
import { Footer } from '../../components';
import { Container } from './styled';
interface INotFound {
	error: string;
}

const NotFound = ({ error }: INotFound) => {
	return (
		<Container>
			<div className='not-found'>
				<div className='not-found__info '>
					<h1>Oops!</h1>
					<h2>{error}</h2>
					<h4>Error code: 404</h4>
					<p>Here are some helpful links instead :</p>
					<div className='not-found__links'>
						<Link to='/'>Home</Link>
						<a href='https://github.com/thaiduy1704'>Search</a>
						<a href='https://github.com/thaiduy1704'>Help</a>
						<a href='https://github.com/thaiduy1704'>Traveling on Airbnb</a>
						<a href='https://github.com/thaiduy1704'>Hosting on Airbnb</a>
						<a href='https://github.com/thaiduy1704'>Trust & Safety</a>
					</div>
				</div>
				<div className='not-found__image flex-center'>
					<img
						src='https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif'
						alt='Girl has dropped her ice cream.'
					/>
				</div>
			</div>
			<Footer />
		</Container>
	);
};

export default NotFound;
