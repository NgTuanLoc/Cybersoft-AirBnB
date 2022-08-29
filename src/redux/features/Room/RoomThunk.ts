import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../utils/axios';
import { IRoom } from '../../../@types/Room';
import { RootState } from '../../store';

const URL = '/api/rooms';

const getRoomListByLocationId = createAsyncThunk<
	IRoom[],
	void,
	{ state: RootState }
>('room/getRoomListByLocationId', async (_, thunkAPI) => {
	const { room } = thunkAPI.getState();
	try {
		const params = {
			method: 'GET',
			url: `${URL}?locationId=${room.locationId}`,
		};
		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

export { getRoomListByLocationId };
