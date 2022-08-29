import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled(Link)`
	display: block;
	transition: var(--transition);
	border-radius: var(--radius);
	cursor: pointer;
	color: black;

	.img-container {
		height: 20rem;
		margin-bottom: 1rem;
		img {
			border-radius: var(--radius);
		}
	}

	p {
		color: #717171;
		font-size: 1.5rem;
	}

	.bold {
		color: black;
		font-weight: bold;
	}

	:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;
export { Container };
