import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';

import { getLocationList } from './redux/features/Location/LocationThunk';
import {
	Admin,
	Auth,
	Home,
	Login,
	NotFound,
	Resgister,
	RoomDetail,
	RoomList,
	User,
} from './pages';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getLocationList());
	}, []);
	return (
		<SkeletonTheme
			width={`100%`}
			height={`100%`}
			baseColor='#d9d7d9'
			highlightColor='#f5f5f5'
			duration={2}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Resgister />} />
					<Route path='/roomDetail/:id' element={<RoomDetail />} />
					<Route path='/roomList/:locationId' element={<RoomList />} />
					<Route path='/user' element={<User />} />

					<Route
						path='/user-not-found'
						element={<NotFound error='User not existed' />}
					/>

					<Route
						path='*'
						element={
							<NotFound error="We can't seem to find the page you're looking for." />
						}
					/>
				</Routes>
			</Router>
		</SkeletonTheme>
	);
}

export default App;
