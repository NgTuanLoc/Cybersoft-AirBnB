import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { IRoom } from '../../@types/Room';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { Container } from './style';
import Image from '../Image/Image';

const Room = ({ _id, name, image, locationId, price }: IRoom) => {
	const { isLoading } = useAppSelector((store) => store.room);
	console.log(_id);

	return (
		<Container to={`/roomDetail/${_id}`}>
			<div className='img-container'>
				{isLoading ? <Skeleton /> : <Image url={image} alt={name} />}
			</div>
			<div className='info'>
				{isLoading ? <Skeleton /> : <h5>{name}</h5>}
				{isLoading ? (
					<Skeleton />
				) : (
					<p>
						{locationId?.province} <span>{locationId?.name}</span>
					</p>
				)}
				{isLoading ? (
					<Skeleton />
				) : (
					<p>
						<span className='bold'>${price.toLocaleString()}</span> night
					</p>
				)}
			</div>
		</Container>
	);
};

export default Room;
