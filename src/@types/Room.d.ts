export interface IRoom {
	deleteAt: boolean;
	_id: string;
	name: string;
	bedRoom: number;
	bath: number;
	description: string;
	price: number;
	elevator: boolean;
	pool: boolean;
	dryer: boolean;
	gym: boolean;
	kitchen: boolean;
	wifi: boolean;
	heating: boolean;
	cableTV: boolean;
	__v: number;
	image: string;
}
