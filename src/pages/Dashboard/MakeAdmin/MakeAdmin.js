import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

	const { allContexts } = useAuth();
	const { user } = allContexts;
	const { _id, email } = user;

	// const [email, setEmail] = useState('');
	const [succes, setSuccess] = useState(false);






	// console.log(product)
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		const { email } = data;
		console.log(email)

		const user = { email };

		fetch('http://localhost:5000/users/admin', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount) {
					console.log(data);
					setSuccess(true);
					reset();
				}
			})

	};
	return (
		<>
			<div
				className="pb-2"
			>

				<div className="container">
					<div>
						<div className="row">

							<div className="col-lg-8 col-12">
								<div className="p-2">
									<div>
										<form
											className="d-block w-100"
											onSubmit={handleSubmit(onSubmit)}
										>


											<label className="d-block mb-4" htmlFor="price">
												<h6>
													Your Email
												</h6>
												<input
													required
													type="email"
													// defaultValue={email}
													className="form-control w-100 d-block"
													id="email"
													name="email"
													placeholder="Your Email"
													{...register("email")}
												/>
											</label>

											<input
												required
												value="Make Admin"
												className="btn mb-3 btn-primary border-0 rounded-0 w-100 d-block"
												type="submit"
											/>
										</form>
										{
											succes && <Alert key={_id} variant="success">
												Made Admin Successfully
											</Alert>

										}

										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MakeAdmin;