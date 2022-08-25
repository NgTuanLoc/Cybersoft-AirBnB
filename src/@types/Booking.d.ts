import { IRoom } from './Room';
import { IUser } from './User';

export interface IBooking {
	deleteAt: boolean;
	_id: string;
	roomId: IRoom | null;
	userId: IUser | null  ;
	checkIn: Date;
	checkOut: Date;
	__v: number;
}
