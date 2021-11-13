import React, { useState } from 'react';
import { BsGoogle } from "react-icons/bs";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLock
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Login = () => {

	const [loginData, setLoginData] = useState({});
	const { allContexts } = useAuth();

	const { 
		authError,
		loginUser,
		signInWithGoogle, } = allContexts;



	const location = useLocation();
	const history = useHistory();

	const handleOnChange = e => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		console.log(newLoginData)
		newLoginData[field] = value;
		setLoginData(newLoginData);
	}
	const handleLoginSubmit = e => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	}

	const handleGoogleSignIn = () => {
		console.log('clicked')
		signInWithGoogle(location, history)
	}





	return (
		<div className="text-center my-4">
			<h2>Please Login</h2>
			<p className=" mt-2">Sign In with Email & Password</p>
			<p className="text-danger text-center">{authError}</p>
			<div style={{ maxWidth: "500px" }} className="w-100 px-3 mx-auto">
				<Form onSubmit={handleLoginSubmit}>
					<Row>
						<Col className="text-start">
							<Form.Label htmlFor="email" visuallyHidden>
								Your Email Address
							</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Text>
									<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
								</InputGroup.Text>
								<FormControl
									required
									onBlur={handleOnChange}
									type="email"
									name="email"
									autoComplete="current-email"
									id="email"
									placeholder="Enter your email address"
								/>
							</InputGroup>
						</Col>
					</Row>
					<Row className="mt-2">
						<Col className="text-start">
							<Form.Label htmlFor="password" visuallyHidden>
								Your Password
							</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Text>
									<FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
								</InputGroup.Text>
								<FormControl
									required
									onBlur={handleOnChange}
									type="password"
									name="password"
									autoComplete="current-password"
									id="password"
									placeholder="Enter your password"
								/>
							</InputGroup>
						</Col>
					</Row>

					{/* <Row>
						<Col className="text-start">
							<Form.Label htmlFor="name" visuallyHidden>
								Your Profile photo URL
							</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Text>
									<FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
								</InputGroup.Text>
								<FormControl
									required
									onBlur={getPhoto}
									type="text"
									autoComplete="current-text"
									id="photo"
									placeholder="Enter valid photo url"
								/>
							</InputGroup>
						</Col>
					</Row> */}
					<button type="submit" className="btn btn-primary mt-2 w-100 fw-bold ">
						Login
					</button>
				</Form>
			</div>
			<p className="mt-2">
				<NavLink className="text-decoration-none" to="/register">
					Don't have an account?Register Account!
				</NavLink>
			</p>


			<div>-----------------------------------------</div>
			<h5>or</h5>
			<button onClick={handleGoogleSignIn} className="btn btn-primary mt-2  fw-bold ">Google Sign In <BsGoogle /></button>
		</div>
	);
};

export default Login;