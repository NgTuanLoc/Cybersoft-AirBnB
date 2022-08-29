import { useEffect } from 'react';
import { Container } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getRoomListByLocationId } from '../../redux/features/Room/RoomThunk';
import Room from '../Room/Room';
const RoomList = () => {
	const { isLoading, roomList, locationId } = useAppSelector(
		(store) => store.room
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getRoomListByLocationId());
	}, [locationId]);

	if (roomList.length === 0) {
		return (
			<h1 style={{ marginInline: 'auto', textAlign: 'center' }}>
				{' '}
				Sorry, there are no room available!
			</h1>
		);
	}

	return (
		<Container>
			<h1>Hotel-Resort </h1>
			<div className='content'>
				{roomList.map((room) => {
					return <Room key={room._id} {...room} />;
				})}
			</div>
		</Container>
	);
};

export default RoomList;
