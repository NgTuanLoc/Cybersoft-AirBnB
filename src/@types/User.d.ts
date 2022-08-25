export interface IUser {
	tickets: string[] | null;
	deleteAt: boolean;
	_id: string;
	name: string;
	email: string;
	password: string;
	phone: string;
	birthday: string;
	gender: boolean;
	address: string;
	type: 'ADMIN' | 'CLIENT';
	__v: number;
	avatar?: string;
}
