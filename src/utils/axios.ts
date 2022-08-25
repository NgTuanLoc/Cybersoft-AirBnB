import axios, { Method } from 'axios';

export interface IAxiosParams<T = {}> {
	method: Method;
	url: string;
	data?: T;
}

//Set config defaults when creating the instance
const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_DOMAIN,
});
//Alter defaults after instance has been created
axiosInstance.defaults.headers.common[
	'tokenByClass'
] = `${process.env.REACT_APP_TOKEN}`;

export { axiosInstance };
