import React, { useState } from 'react';
import { BsGoogle } from "react-icons/bs";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLock,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory,useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Register = () => {

	const [loginData, setLoginData] = useState({});
	const history = useHistory();
	const { allContexts } = useAuth();
	const location = useLocation();


	const { 
		authError,
		registerUser,
		signInWithGoogle,
		} = allContexts;


	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		console.log(newLoginData)
		setLoginData(newLoginData);
	}
	const handleLoginSubmit = e => {
		if (loginData.password !== loginData.password2) {
			alert('Your password did not match');
			return
		}
		registerUser(loginData.email, loginData.password, loginData.name, history);
		e.preventDefault();
	}

	const handleGoogleSignIn = () => {
		console.log('clicked')
		signInWithGoogle(location, history)
	}





	return (
		<div className="text-center my-4">
			<h2>Please Sign Up</h2>
			<p className=" mt-2">Sign Up with Email & Password</p>
			<p className="text-danger text-center">{authError}</p>
			<div style={{ maxWidth: "500px" }} className="w-100 px-3 mx-auto">
				<Form onSubmit={handleLoginSubmit}>
					<Row>
						<Col className="text-start">
							<Form.Label htmlFor="name" visuallyHidden>
								Your Name
							</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Text>
									<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
								</InputGroup.Text>
								<FormControl
									required
									onBlur={handleOnBlur}
									type="text"
									autoComplete="current-name"
									name="name"
									id="name"
									placeholder="Enter your name"
								/>
							</InputGroup>
						</Col>
					</Row>
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
									onBlur={handleOnBlur}
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
									onBlur={handleOnBlur}
									type="password"
									name="password"
									autoComplete="current-password"
									id="password"
									placeholder="Enter your password"
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
									onBlur={handleOnBlur}
									type="password"
									name="password2"
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
					<button type="submit" className="btn btn-primary mt-2 w-100">
					Register
					</button>
				</Form>
			</div>
			<p className="mt-2">
				<NavLink className="text-decoration-none" to="/login">
					Already have an account? Please login!
				</NavLink>
			</p>


			<div>-----------------------------------------</div>
			<h5>or</h5>
			<button onClick={handleGoogleSignIn} className="btn btn-primary mt-2  fw-bold ">Register With <BsGoogle /></button>
		</div>
	);
};

export default Register;