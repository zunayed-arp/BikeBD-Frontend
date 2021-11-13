import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
	const [myOrders, setMyOrders] = useState([]);
	const { allContexts } = useAuth();
	const { user } = allContexts;
	// const { email } = user;

	useEffect(() => {
		axios.get(`https://aqueous-inlet-49489.herokuapp.com/orders/${user.email}`)
			.then(res => {
				setMyOrders(res.data);
			});
	}, [user.email])


	const cancelOrder = (id) => {
		const cofirmation = window.confirm('confirm to delete!');
		if (cofirmation) {
			axios.delete(`https://aqueous-inlet-49489.herokuapp.com/delete/${id}`)
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

	return (
		<>





			<table className="table table-hover container">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Price</th>
						<th scope="col">Status</th>
						<th scope="col">Buyer</th>
						<th scope="col">Cancellation</th>
					</tr>
				</thead>
				<tbody>
					{myOrders?.map(myOrder => {
						const { _id, name, title, price, status } = myOrder;
						return (
							<tr
								key={_id}
							>
								<td className="td">{title}</td>
								<td className="td">{price}</td>
								<td className="text-primary">{status}</td>
								<td className="td">{name}</td>
								<td className="td">
									<button
										onClick={() => cancelOrder(_id)}
										className="btn btn-danger"
									>
										Remove
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<Link to="/">
				<button className="btn btn-primary mx-3">Go Home</button>
			</Link>

			<Link to="/dashboard">
				<button className="btn btn-primary">Go Dashboard</button>
			</Link>

			{/* <div
				className="bg-light container"
				style={{
					minHeight: "100vh",
					color: "white !important",
				}}
			>
				<div className="mt-5 pt-5 ">
					<h1 className="text-center text-black  mb-3">My Orders</h1>
					<div style={{ width: "100vw", overflow: "auto" }}>
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">Title</th>
									<th scope="col">Price</th>
									<th scope="col">Status</th>
									<th scope="col">Buyer</th>
									<th scope="col">Cancellation</th>
								</tr>
							</thead>
							<tbody>
								{myOrders?.map(myOrder => {
									const { _id, name, title, price, status } = myOrder;
									return (
										<tr
											key={_id}
										>
											<td className="td">{title}</td>
											<td className="td">{price}</td>
											<td className="text-primary">{status}</td>
											<td className="td">{name}</td>
											<td className="td">
												<button
													onClick={() => cancelOrder(_id)}
													className="btn btn-danger"
												>
													Remove
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









			{/* <table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td colspan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table> */}

		</>
	);
};

export default MyOrders;