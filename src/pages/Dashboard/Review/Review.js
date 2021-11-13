import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Review = () => {


	const { allContexts } = useAuth();
	const { user } = allContexts;
	const {displayName, email, photoURL } = user;
	console.log(displayName)
	console.log(photoURL)
	const [product, setProduct] = useState({});
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:5000/products/${id}`)
			.then(res => {
				const gotProduct = res.data;
				setProduct(gotProduct);
			})
	}, [id])

	// const { title, img, rating, description, price, duration, } = product;
	// console.log(product)
	const { register, handleSubmit,reset } = useForm();

	const onSubmit = (data) => {
		const { name, email, description,rating } = data;
		const review = {
			description,
			rating,
			name,
			email,
		
			
		};
		// console.log(ordered)
		axios.post("http://localhost:5000/reviews", review)
			// console.log('clicked')
			.then((res) => {
				const response = res.data;
				// 	console.log(res)
				if (response) {
					alert("Review Posted Successfully!");
					history.push("/");
					reset();
				} else {
					alert("something went wrong!!");
				}
			});
	};
	return (
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
										<label className="d-block mb-4" htmlFor="name">
											<h6>Your Name</h6>
											<input
												required
												readOnly
												defaultValue={displayName}
												className="form-control w-100 d-block"
												id="name"
												placeholder="Your Name"
												{...register("name")}
											/>
										</label>

										<label className="d-block mb-4" htmlFor="price">
											<h6>
												Your Email
											</h6>
											<input
												required
												readOnly
												type="email"
												defaultValue={email}
												className="form-control w-100 d-block"
												id="email"
												placeholder="Your Email"
												{...register("email")}
											/>
										</label>

										<label className="d-block mb-4" htmlFor="address">
											<h6>Write something</h6>
											<textarea
												required
												type="text"
												className="form-control w-100 d-block"
												id="address"
												placeholder="write something....!!"
												{...register("description")}
											/>
										</label>

										<label className="d-block mb-4" htmlFor="address">
											<h6>Rate Between 1-5</h6>
											<input
												required
												type="number"
												className="form-control w-100 d-block"
												id="address"
												placeholder="Rating"
												{...register("rating")}
											/>
										</label>



										<input
											required
											value="Post Your Review"
											className="btn mb-3 btn-primary border-0 rounded-0 w-100 d-block"
											type="submit"
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;