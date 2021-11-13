import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const PlaceOrder = () => {

	const [loading,setLoding] = useState(true);

	const { allContexts } = useAuth();
	const { user } = allContexts;
	const { displayName, email, photoURL } = user;
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
				setLoding(false);
			})
	}, [id])




	const { title, img, rating, description, price, duration, } = product;
	// console.log(product)
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		const { name, email, address, phone,  } = data;
		const ordered = {
			title,
			description,
			price,
			img,
			rating,
			duration,
			name,
			email,
			address,
			phone,
			status: "Pending",
		};
		// console.log(ordered)
		axios.post("http://localhost:5000/book", ordered)
			// console.log('clicked')
			.then((res) => {
				const response = res.data;
					console.log(res)
				if (response) {
					alert("Successfully purchase the product!");
					history.push("/myOrders");
				} else {
					alert("something went wrong!!");
				}
			});
	};


	if (loading) {
		return (
			<div className="text-center my-5 py-5">
				<Spinner variant="success" animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		)
	};


	return (
		<div
			style={{
				minHeight: "80vh",
				backgroundAttachment: "fixed",
				marginTop: "100px",
			}}
			className="pb-2"
		>
			<h1 className="text-center booking-title text-dark mb-5">
		
				Purchase the <span className="text-danger bg-info border rounded">	  {title}</span>
		
			</h1>
			<div className="container">
				<div>
					<div className="row">
						<div className="col-lg-4 col-12 p-2 overflow-hidden img-fluid">
							<img
								style={{
									maxHeight: "300px",
									objectFit: "fill",
								}}
								src={img}
								alt=""
							/>
						</div>
						<div className="col-lg-8 col-12">
							<div className="p-2">
								<h2>{title}</h2>
								<p className="m-0">{description}</p>
								<h4 className="mb-3 mt-2">Price:{price}$</h4>
								<div>
									<form
										className="d-block w-100"
										onSubmit={handleSubmit(onSubmit)}
									>
										<label className="d-block mb-4" htmlFor="name">
											<h6>Your Name</h6>
											<input
												required
												defaultValue={displayName}
												className="form-control w-100 d-block"
												id="name"
												placeholder="Your Name"
												{...register("name")}
											/>
										</label>

										<label className="d-block mb-4" htmlFor="price">
											<h6>
												Your Email -
												<span className="text-danger">
													<small>Can't be changed</small>
												</span>
											</h6>
											<input
												required
												readOnly
												type="text"
												defaultValue={email}
												className="form-control w-100 d-block"
												id="email"
												placeholder="Your Email"
												{...register("email")}
											/>
										</label>

										<label className="d-block mb-4" htmlFor="address">
											<h6>Your Address</h6>
											<input
												required
												type="address"
												className="form-control w-100 d-block"
												id="address"
												placeholder="Your address"
												{...register("address")}
											/>
										</label>

										<label className="d-block mb-4" htmlFor="phone">
											<h6>Your Phone Number</h6>
											<input
												required
												type="phone"
												className="form-control w-100 d-block"
												id="phone"
												placeholder="Your phone number"
												{...register("phone")}
											/>
										</label>

										{/* <label className="d-block mb-4" htmlFor="photo">
											<h6>Your profile Photo url</h6>
											<input
												defaultValue={photoURL}
												className="form-control w-100 d-block"
												id="photo"
												placeholder="Your profile"
												{...register("profile")}
											/>
										</label> */}

										<input
											required
											value="Place Order now"
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

export default PlaceOrder;