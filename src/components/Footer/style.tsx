import styled from 'styled-components';
export const Container = styled.footer`
	display: block;
	background-color: #f7f7f7;
	/* width: 100%; */
	padding: 2rem 8rem;
	.links {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 3rem;
		background-color: transparent;
		ul {
			list-style-type: none;
		}
		li {
			margin: 0.5rem auto;
			text-transform: capitalize;
			font-size: 1.2rem;
			cursor: pointer;
		}
	}
	.line {
		height: 1px;
		width: 100%;
		background-color: #dddddd;
		margin: 3rem auto;
	}
	.social {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h4 {
			font-size: 1.5rem;
			font-weight: 300;
		}

		a {
			font-size: 2.5rem;
			margin-inline: 0.5rem;
			transition: var(--transition);
			color: black;

			:hover:nth-child(1) {
				color: #1877f2;
			}
			:hover:nth-child(2) {
				color: #1da1f2;
			}
			:hover:nth-child(3) {
				color: #e4405f;
			}
			:hover:nth-child(4) {
				color: #0a66c2;
			}
		}
	}
	@media only screen and (max-width: 992px) {
		padding-inline: 1rem;
		.links {
			grid-template-columns: 1fr;
		}
		.social {
			flex-direction: column;

			h4 {
				margin-bottom: 1rem;
			}
		}
	}
`;
