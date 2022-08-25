import styled from 'styled-components';

export const Container = styled.button`
	position: relative;
	color: white;
	font-size: 2rem;
	border-radius: var(--radius);
	padding: 1rem 1rem;
	background: var(--clr-gradient);
	transition: var(--transition);
	width: 100%;
	h4 {
		position: relative;
		z-index: 1000;
		margin: 0;
	}

	::after {
		content: '';
		border-radius: var(--radius);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: var(--clr-radial);
		opacity: 0;
		transition: var(--transition);
	}

	:hover {
		::after {
			opacity: 1;
		}
	}
`;
