import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Loading, Navbar, RoomSingle } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getRoomListByLocationId } from '../../redux/features/Room/RoomThunk';
import { selectLocaiton } from '../../redux/features/Room/RoomSlice';
import { Container, GoogleMap, RoomListDiv } from './style';
const RoomList = () => {
	const { locationId } = useParams();
	const { roomList, isLoading } = useAppSelector((store) => store.room);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(selectLocaiton(locationId as string));
		dispatch(getRoomListByLocationId());
	}, [locationId]);
	if (isLoading) return <Loading />;

	console.log(locationId);

	return (
		<>
			<Navbar />
			<Container>
				<RoomListDiv>
					{roomList.map((room) => {
						return <RoomSingle {...room} key={room._id} />;
					})}
				</RoomListDiv>

				<GoogleMap>
					<iframe
						title='map'
						src='https://www.google.com/maps/d/embed?mid=1P9x70YwwVvtxthmnVQt1ikJBoKE&ehbc=2E312F'
						width='100%'
						height='100%'></iframe>
				</GoogleMap>
			</Container>
			<Footer />
		</>
	);
};

export default RoomList;
