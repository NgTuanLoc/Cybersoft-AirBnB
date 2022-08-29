import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { registerThunk } from '../../redux/features/Auth/AuthThunk';
import { Container } from './style';
import { Button, Image, Loading, Error } from '../../components';

type FormInputs = {
	name: string;
	email: string;
	password: string;
	phone: string;
	birthday: string;
	gender: boolean;
	address: string;
};

const Register = () => {
	const dispatch = useAppDispatch();
	const [errorStatus, setErrorStatus] = useState<string>('');

	const { isAuthenticated, isLoading, auth, error } = useAppSelector(
		(store) => store.auth
	);

	const navigation = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({ mode: 'onChange' });

	const onRegisterHandle = (user: FormInputs) => {
		dispatch(registerThunk(user));
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigation('/login');
		}
	}, [auth]);
	useEffect(() => {
		if (!error) {
			setErrorStatus('');
			return;
		}
		if (error) {
			if (error === 'Không tìm thấy email phù hợp') {
				setErrorStatus('Your email is not exist');
			}
		}

		return;
	}, [error, errorStatus, errors]);

	return (
		<Container>
			<div className='login__form flex-center'>
				<Link className='back-btn' to='/'>
					Back
				</Link>
				{isLoading ? (
					<Loading />
				) : (
					<form onSubmit={handleSubmit(onRegisterHandle)}>
						<h2 className='heading'>Register to Airbnb</h2>
						<p>
							Find vacation rentals, cabins, beach houses, unique homes and
							experiences around the world.
						</p>
						<div className='login__input login__input--first'>
							<label htmlFor='name'>Username</label>
							<input
								type='name'
								placeholder='name'
								{...register('name', {
									required: { value: true, message: 'Name must be provided' },
								})}
							/>
							{errors.name && <h5 className='danger'>{errors.name.message}</h5>}
						</div>
						<div className='login__input'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								placeholder='email'
								{...register('email', {
									required: { value: true, message: 'Email must be provided' },
									pattern: { value: /@gmail.com/i, message: 'Invalid Email' },
								})}
							/>
							{errors.email && (
								<h5 className='danger'>{errors.email.message}</h5>
							)}
						</div>

						<div className='login__input'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								placeholder='password'
								{...register('password', {
									required: {
										value: true,
										message: 'Password must be provided',
									},
								})}
							/>
							{errors.password && (
								<h5 className='danger'>{errors.password.message}</h5>
							)}
						</div>

						<div className='login__input'>
							<label htmlFor='phone'>Phone</label>
							<input
								type='text'
								placeholder='phone'
								{...register('phone', {
									required: { value: true, message: 'phone must be provided' },
								})}
							/>
							{errors.phone && (
								<h5 className='danger'>{errors.phone.message}</h5>
							)}
						</div>

						<div className='login__input'>
							<label htmlFor='birthday'>Birthday</label>
							<input
								type='date'
								placeholder='Birthday'
								{...register('birthday', {
									required: {
										value: true,
										message: 'Birthday must be provided',
									},
								})}
							/>
							{errors.phone && (
								<h5 className='danger'>{errors.phone.message}</h5>
							)}
						</div>

						<div className='login__input gender'>
							<label htmlFor='gender'>Gender</label>
							<select
								{...register('gender', {
									required: { value: true, message: 'Gender must be provided' },
								})}>
								<option value='Man'>Man</option>
								<option value='Woman'>Woman</option>
							</select>
							{errors.gender && (
								<h5 className='danger'>{errors.gender.message}</h5>
							)}
						</div>

						<div className='login__input login__input--last'>
							<label htmlFor='address'>Address</label>
							<input
								type='text'
								placeholder='Address'
								{...register('address', {
									required: {
										value: true,
										message: 'Address must be provided',
									},
								})}
							/>
							{errors.address && (
								<h5 className='danger'>{errors.address.message}</h5>
							)}
						</div>
						<Error>{errorStatus}</Error>

						<Button>Register</Button>
					</form>
				)}
			</div>
			<div className='login__image'>
				<Image
					url='https://preview.colorlib.com/theme/bootstrap/login-form-01/images/xbg_1.jpg.pagespeed.ic.nj5iPvtRed.webp'
					alt='travel'
				/>
			</div>
		</Container>
	);
};

export default Register;
