import styled from 'styled-components';

const Container = styled.main`
	margin-top: var(--navbar-height);
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr 1fr;
	height: calc(100vh - var(--navbar-height));
	padding: 2rem 0;

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
		height: auto;
	}
`;

const GoogleMap = styled.section`
	display: block;
	border: transparent;
	box-shadow: var(--box-shadow);
	@media only screen and (max-width: 992px) {
		min-height: 50rem;
	}
`;
const RoomListDiv = styled.section`
	overflow-y: scroll;
	scrollbar-width: none;
`;
export { Container, GoogleMap, RoomListDiv };
