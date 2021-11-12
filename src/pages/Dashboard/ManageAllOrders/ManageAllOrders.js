import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
	const [myOrders, setMyOrders] = useState([]);
	const [confirmed, setConfirmed] = useState(0);


	useEffect(() => {
		axios.get('http://localhost:5000/orders')
			.then(res => {
				setMyOrders(res.data);
			});
	}, [confirmed])


	const cancelOrder = id => {
		const cofirmation = window.confirm('confirm to delete!');
		if (cofirmation) {
			axios.delete(`http://localhost:5000/delete/${id}`)
				.then(res => {
					if (res.data === 1) {
						const rest = myOrders.filter(order => order._id !== id);
						setMyOrders(rest);
						alert('succesfull deletion');
					} else {
						alert('Something went wrong!!');
					}

				});
		}
	};


	const confirmation = id => {
		axios.patch(`http://localhost:5000/confirmation/${id}`)
			.then(res => {
				if (res.data === 1) {
					setConfirmed(res.data);
					alert('Purchase successfull');
				} else {
					alert('Already Confirmed')
				}
			});
	};




	return (
		<>

			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Price</th>
						<th scope="col">Status</th>
						<th scope="col">Buyer</th>
						<th scope="col">Phone</th>
						<th scope="col-3">Email</th>
						<th scope="col">Cancellation</th>
						<th scope="col">Confirmation</th>
					</tr>
				</thead>
				<tbody>
					{myOrders?.map((service) => {
						const {
							_id,
							profile,
							name,
							email,
							phone,
							title,
							price,
							status,
						} = service;
						return (
							<tr>
								<td>{title}</td>
								<td>{price}</td>
								<td className="text-primary">{status}</td>
								<td>
									<img width="50px" src={profile} alt="" />
									<p className="m-0 mt-2"> {name}</p>
								</td>
								<td>{phone}</td>
								<td className="col-3">{email}</td>
								<td>
									<button
										onClick={() => cancelOrder(_id)}
										className="btn btn-danger"
									>
										Cancel
									</button>
								</td>
								<td>
									<button
										onClick={() => confirmation(_id)}
										className="btn btn-primary"
									>
										Confirm
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>




















			{/* <div className="bg-light" style={{ minHeight: "100vh" }}>
				<div className="mt-5 pt-5">
					<h1 className="text-center  mb-4">Manage All Orders</h1>
					<div style={{ width: "100vw", overflow: "auto" }}>
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">Title</th>
									<th scope="col">Price</th>
									<th scope="col">Status</th>
									<th scope="col">Buyer</th>
									<th scope="col">Phone</th>
									<th scope="col-3">Email</th>
									<th scope="col">Cancellation</th>
									<th scope="col">Confirmation</th>
								</tr>
							</thead>
							<tbody>
								{myOrders?.map((service) => {
									const {
										_id,
										profile,
										name,
										email,
										phone,
										title,
										price,
										status,
									} = service;
									return (
										<tr>
											<td>{title}</td>
											<td>{price}</td>
											<td className="text-primary">{status}</td>
											<td>
												<img width="50px" src={profile} alt="" />
												<p className="m-0 mt-2"> {name}</p>
											</td>
											<td>{phone}</td>
											<td className="col-3">{email}</td>
											<td>
												<button
													onClick={() => cancelOrder(_id)}
													className="btn btn-danger"
												>
													Cancel
												</button>
											</td>
											<td>
												<button
													onClick={() => confirmation(_id)}
													className="btn btn-primary"
												>
													Confirm
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div> */}






		</>
	);
};

export default ManageAllOrders;