import { GiMeal, GiElevator, GiFireplace } from 'react-icons/gi';
import {
	MdOutlineHotTub,
	MdOutlineLocalLaundryService,
	MdOutlineCable,
} from 'react-icons/md';
import { FaSwimmingPool } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { AiOutlineWifi, AiOutlineFire } from 'react-icons/ai';

export const logo = {
	kitchen: <GiMeal />,
	elevator: <GiElevator />,
	hotTub: <MdOutlineHotTub />,
	pool: <FaSwimmingPool />,
	indoorFireplace: <GiFireplace />,
	dryer: <MdOutlineLocalLaundryService />,
	gym: <CgGym />,
	wifi: <AiOutlineWifi />,
	heating: <AiOutlineFire />,
	cableTV: <MdOutlineCable />,
};
