import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { loginThunk } from '../../redux/features/Auth/AuthThunk';

import { Container } from './style';
import { Button, Image, Loading, Error } from '../../components';

type FormInputs = {
	email: string;
	password: string;
};
const Login = () => {
	const dispatch = useAppDispatch();
	const [errorStatus, setErrorStatus] = useState<string>('');
	const { isLoading, isAuthenticated, auth, error } = useAppSelector(
		(store) => store.auth
	);
	const navigation = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({ mode: 'onChange' });
	const onLoginHandler = (user: FormInputs) => {
		dispatch(loginThunk(user));
	};
	useEffect(() => {
		if (isAuthenticated) {
			navigation('/');
		}
	}, [isAuthenticated]);

	useEffect(() => {
		if (!error) {
			setErrorStatus('');
		}

		if (error) {
			if (error === 'Không tìm thấy email phù hợp') {
				setErrorStatus('Your email is not exist');
			} else {
				setErrorStatus('Your email or password is not valid');
			}
		}
		return;
	}, [error, errorStatus, errors]);

	console.log(errors);
	return (
		<Container>
			<div className='login__form flex-center'>
				<Link className='back-btn' to='/'>
					Back
				</Link>
				{isLoading ? (
					<Loading />
				) : (
					<form onSubmit={handleSubmit(onLoginHandler)}>
						<h2 className='heading'>Login to Airbnb</h2>
						<p>
							Find vacation rentals, cabins, beach houses, unique homes and
							experiences around the world.
						</p>
						<div className='login__input'>
							<label htmlFor='email'>Username</label>
							<input
								type='email'
								placeholder='your-email@gmail.com'
								{...register('email', {
									required: { value: true, message: 'Email must be provided' },
									pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email' },
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
								placeholder='Your password'
								{...register('password', {
									required: {
										value: true,
										message: 'Password must be provided',
									},
									min: {
										value: 6,
										message: 'Password must have at least 6 letters',
									},
								})}
							/>
							{errors.password && (
								<h5 className='danger'>{errors.password.message}</h5>
							)}
						</div>
						{errorStatus && <Error>{errorStatus}</Error>}

						<Button>Login</Button>
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

export default Login;
