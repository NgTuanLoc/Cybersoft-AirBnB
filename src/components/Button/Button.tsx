import React, { ReactNode } from 'react';
import { Container } from './style';

interface IButton {
	children: ReactNode;
}

const Button = ({ children }: IButton) => {
	return (
		<Container>
			<h4>{children}</h4>
		</Container>
	);
};

export default Button;
