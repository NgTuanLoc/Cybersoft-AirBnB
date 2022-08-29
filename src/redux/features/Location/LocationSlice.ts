import { createSlice } from '@reduxjs/toolkit';
import { ILocation } from '../../../@types/Location';
import { getLocationList } from './LocationThunk';

export interface ILocationState {
	locationList: ILocation[];
	isLoading: boolean;
	successMsg: string;
	error: string;
}

const initialState: ILocationState = {
	locationList: [],
	isLoading: false,
	successMsg: '',
	error: '',
};

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getLocationList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getLocationList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.locationList = payload;
		});
		builder.addCase(getLocationList.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
	},
});

export default locationSlice.reducer;
