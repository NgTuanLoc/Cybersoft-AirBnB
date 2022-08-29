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

export interface IRegister {
	name: string;
	email: string;
	password: string;
	phone: string;
	birthday: string;
	gender: boolean;
	address: string;
}

// const registerThunk = createAsyncThunk<IAuth, IRegister>(
// 	'auth/register',
// 	async (user, thunkAPI) => {
// 		try {
// 			const params = {
// 				method: 'POST',
// 				url: `${URL}/register`,
// 				data: {
// 					name: user.name,
// 					email: user.email,
// 					password: user.password,
// 					phone: user.phone,
// 					birthday: user.birthday,
// 					gender: user.gender,
// 					address: user.address,
// 				},
// 			};

// 			const reponse = await axiosInstance(params);
// 			thunkAPI.dispatch(
// 				loginThunk({
// 					email: user.email,
// 					password: user.password,
// 				})
// 			);
// 			return reponse.data;
// 		} catch (error: any) {
// 			return thunkAPI.rejectWithValue(error.reponse.data.message);
// 		}
// 	}
// );

const registerThunk = createAsyncThunk<IAuth, IRegister>(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			const params = {
				method: 'POST',
				url: `${URL}/register`,
				data: {
					name: user.name,
					email: user.email,
					password: user.password,
					phone: user.phone,
					birthday: user.birthday,
					gender: user.gender,
					address: user.address,
				},
			};

			const response = await axiosInstance.request(params);
			thunkAPI.dispatch(
				loginThunk({
					email: user.email,
					password: user.password,
				})
			);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export { loginThunk, registerThunk };
