import styled from 'styled-components';

const Container = styled.section`
	h1 {
		text-align: center;
		background: linear-gradient(to left, #eecda3 0%, #ef629f 100%);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.content {
		margin: 4rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		grid-gap: 2rem;
		padding-bottom: var(--footer-height);
	}
`;
export { Container };
