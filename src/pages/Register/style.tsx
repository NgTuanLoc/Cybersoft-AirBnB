import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: var(--clr-secondary);
	display: grid;
	grid-template-columns: 1fr 1fr;

	h2 {
		background: linear-gradient(to right, #4420d4 0%, #ff385c 100%);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		height: 4rem;
		margin-bottom: -2rem;
	}

	.login__image {
		height: 100vh;
	}

	.login__form {
		height: 105vh;
		position: relative;

		.back-btn {
			position: absolute;
			top: 3rem;
			left: 3rem;
			font-size: 2rem;
			color: var(--clr-primary);
			transition: var(--transition);

			:hover {
				color: #d70466;
			}
		}

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 80%;
			max-width: 50rem;

			p {
				color: #b3b3b3;
				margin: 2rem 0;
				font-size: 1.5rem;
				text-align: center;
			}

			.login__input {
				border-top-left-radius: var(--radius);
				border-top-right-radius: var(--radius);
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-direction: column;
				border: 1px solid #b3b3b3;
				padding: 1rem;
				height: auto;
				h5 {
					font-size: 1rem;
				}

				label {
					font-size: 1.3rem;
					font-weight: 800;
					color: var(--clr-paragraph);
				}

				input {
					border: transparent;
					background-color: transparent;
					width: 100%;
					font-size: 1.2rem;
					:focus {
						background-color: transparent;
						border: transparent;
						outline: none;
					}
				}
			}

			.login__input:nth-child(2n) {
				border-top: none;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				border-bottom-left-radius: var(--radius);
				border-bottom-right-radius: var(--radius);
			}

			button {
				margin: 2rem 0;
			}
		}
	}

	@media only screen and (max-width: 992px) {
		height: 100%;
		overflow: none;
		display: flex;
		flex-direction: column;
		.login__form {
			order: 3;
		}

		.login__image {
			width: 100%;
			height: 40rem;
			order: 1;
		}
	}
`;
