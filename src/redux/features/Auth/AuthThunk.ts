import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../../utils/axios';

import { IAuth } from '../../../@types/Auth';

const URL = '/api/auth';

const loginThunk = createAsyncThunk<
	IAuth,
	{
		email: string;
		password: string;
	}
>('auth/login', async (user, thunkAPI) => {
	try {
		const params = {
			method: 'POST',
			url: `${URL}/login`,
			data: {
				email: user.email,
				password: user.password,
			},
		};
		const response = await axiosInstance.request(params);
		const token = {
			email: user.email,
			password: user.password,
			token: response.data.token,
			type: response.data.user.type,
		};
		localStorage.setItem('userLogin', JSON.stringify(token));
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});

export { loginThunk };
