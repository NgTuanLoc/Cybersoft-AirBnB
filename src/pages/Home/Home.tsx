import React from 'react';
import { Categories, Footer, Navbar, RoomList } from '../../components';

import { Container, RoomContainer } from './style';
const Home = () => {
	return (
		<Container>
			<Navbar />
			<RoomContainer className='section'>
				<Categories />
				<RoomList />
			</RoomContainer>
			<Footer />
		</Container>
	);
};

export default Home;
