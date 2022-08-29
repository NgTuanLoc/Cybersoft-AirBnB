import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled(Swiper)`
	width: 100%;

	.swiper-button-next,
	.swiper-button-prev {
		top: 50%;
		transform: translateY(-50%);
		color: black;
	}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 12.5rem;
	text-align: center;
	cursor: pointer;

	.image-container {
		border-radius: var(--radius);
		height: 12rem;

		img {
			border-radius: var(--radius);
		}
	}
`;
export { Container, Item };
