import { RingLoader } from 'react-spinners';
import { Container } from './style';

const Loading = () => {
	return (
		<Container>
			<RingLoader color='#ff385c' size={70} />
		</Container>
	);
};

export default Loading;
