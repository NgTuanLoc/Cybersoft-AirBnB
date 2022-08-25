/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IError {
	children: ReactNode;
}

const Error = ({ children }: IError) => {
	const [removeError, setRemoveError] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setRemoveError(true);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<Container removeError={removeError}>
			<h5>{children}</h5>
		</Container>
	);
};

interface Props {
	removeError: boolean;
}

const Container = styled.div<Props>`
	transition: var(--transition);
	display: ${(props) => (props.removeError ? 'none' : 'block')};
	width: 100%;
	margin: 1rem auto;
	h5 {
		color: var(--clr-danger);
	}
`;

export default Error;
