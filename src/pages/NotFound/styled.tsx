import styled from 'styled-components';

export const Container = styled.section`
	.not-found {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 5rem;
	}

	.not-found__image {
		img {
			width: auto;
			height: auto;
		}
	}

	.not-found__info {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;

		h1 {
			font-size: 7rem;
			color: #484848;
			margin-bottom: 2rem;
		}

		h2 {
			color: #484848;
			font-weight: 350;
			margin-bottom: 1.5rem;
		}

		p {
			font-size: 1.5rem;
		}

		h4 {
			font-size: 1.5rem;
			font-weight: 600;
			color: #a91010;
		}

		.not-found__links {
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			display: flex;

			a {
				color: #26969a;
				font-size: 2rem;
				transition: var(--transition);

				:hover {
					text-decoration: underline;
				}
			}
		}
	}

	@media only screen and (max-width: 992px) {
		.not-found {
			grid-template-columns: 1fr;
		}

		.not-found {
			padding: 2rem;
		}
		.not-found__image {
			display: none;
		}
	}
`;
