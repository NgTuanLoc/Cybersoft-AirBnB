import { useParams } from 'react-router-dom';
import { Container } from './style';

const RoomDetail = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<Container>
			<h1>{id}</h1>
		</Container>
	);
};

export default RoomDetail;
