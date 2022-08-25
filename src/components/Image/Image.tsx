import Skeleton from 'react-loading-skeleton';

import { useProgressiveImg } from '../../redux/hooks/useProgressiveImg';

import { Container } from './style';

interface IIamge {
	url: string;
	alt: string;
}

const Image = ({ url, alt }: IIamge) => {
	const isImageLoaded = useProgressiveImg(url);
	return (
		<Container>
			{isImageLoaded ? (
				<img src={url} alt={alt} />
			) : (
				<Skeleton
					height={`100%`}
					baseColor='#d9d7d9'
					highlightColor='#f5f5f5'
					borderRadius='0.5rem'
					duration={2}
				/>
			)}
		</Container>
	);
};

export default Image;
