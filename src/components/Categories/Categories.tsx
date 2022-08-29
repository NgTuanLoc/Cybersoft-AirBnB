import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import { useMediaQuery } from 'react-responsive';
import Image from '../Image/Image';

import { Container, Item } from './style';
import Skeleton from 'react-loading-skeleton';
import { selectLocaiton } from '../../redux/features/Room/RoomSlice';

const Categories = () => {
	const dispatch = useAppDispatch();
	const { isLoading, locationList } = useAppSelector((store) => store.location);

	const isMoblieDevice = useMediaQuery({
		query: '(max-width:992px)',
	});

	return (
		<Container
			spaceBetween={isMoblieDevice ? 5 : 10}
			slidesPerView={isMoblieDevice ? 4 : 8}
			navigation={true}
			modules={[Navigation]}>
			{locationList.map((location) => {
				const { _id, image, province } = location;
				return (
					<SwiperSlide
						key={_id}
						onClick={() => {
							dispatch(selectLocaiton(_id));
						}}>
						<Item>
							<div className='image-container'>
								<Image url={image} alt={province} />
							</div>
							{isLoading ? <Skeleton /> : <h5>{province}</h5>}
						</Item>
					</SwiperSlide>
				);
			})}
		</Container>
	);
};

export default Categories;
