import { IUser } from './User';

export interface IAuth {
	message: string;
	user: IUser;
	token?: string;
}
