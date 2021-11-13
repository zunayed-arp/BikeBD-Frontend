import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddService from '../AddService/AddService';
import Blog from '../Blog/Blog';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import UpdateForm from '../UpdateForm/UpdateForm';

const Dashboard = () => {
	const [isAdmin, setIsAdmin] = useState(true);
	let { path, url } = useRouteMatch();
	const { allContexts, isLoading, logOut } = useAuth();
	const { admin, user } = allContexts;

	// console.log(admin)
	// console.log('isloading',isLoading)

	useEffect(() => {
		setTimeout(() => {
			setIsAdmin(false);
		}, 1000)
	}, [])

	if (isLoading) {
		return (
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>

		);

	};

	return (
		<Container>
			<div>
				<h3>Dashboard</h3>
				<h3 className="bg-danger text-white">User: {user.displayName}</h3>
			</div>
			<Row>

				<Col xs={6} md={4} className="border border-4 bg-danger">
					<ListGroup>
						<ListGroup.Item>
							<Link to="/"><button>Home</button></Link>
						</ListGroup.Item>

						<ListGroup.Item variant="primary">
							<Link to={`${url}`}><button>Dashboard</button></Link>
						</ListGroup.Item>

						{!admin && <>
							<ListGroup.Item variant="secondary">
								<Link to={`${url}/orders`}><button>My Orders</button></Link>
							</ListGroup.Item>

							<ListGroup.Item variant="secondary">
								<Link to={`${url}/review`}><button>Review</button></Link>
							</ListGroup.Item>
						</>}

						{
							isLoading ? <>
								<div className="spinner-border text-primary" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</>
								:

								admin && <>
									<ListGroup.Item variant="success">
										<Link to={`${url}/addProduct`}><button>Add Product</button></Link>
									</ListGroup.Item>

									<ListGroup.Item variant="light">
										<Link to={`${url}/manageAllOrders`}><button>Manage All Orders</button></Link>
									</ListGroup.Item>

									<ListGroup.Item variant="danger">
										<Link to={`${url}/makeAdmin`}><button>Make Admin</button></Link>
									</ListGroup.Item>

									<ListGroup.Item variant="danger">
										<Link to={`${url}/manageProducts`}><button>Manage Products</button></Link>
									</ListGroup.Item>
									{/* <ListGroup.Item variant="danger">
										<Link to={`${url}/updateForm`}><button>Manage Products</button></Link>
									</ListGroup.Item> */}
								</>




						}

						{!admin && <ListGroup.Item variant="warning">
							<Link to={`${url}/payment`}><button>Payment</button></Link>
						</ListGroup.Item>}


						<ListGroup.Item variant="danger">
							<Link to={`${url}/blog`}><button>Add Blog</button></Link>
						</ListGroup.Item>

						<ListGroup.Item variant="info">
							<button onClick={logOut} className="btn btn-primary">
								Sign Out
							</button>
						</ListGroup.Item>

					</ListGroup>


				</Col>

				<Col xs={12} md={8} className="border border-4 bg-info">
					{
						!admin &&

						<Switch>
							<Route exact path={path}>
								<DashboardHome></DashboardHome>
							</Route>

							<AdminRoute path={`${path}/makeAdmin`}>
								<MakeAdmin></MakeAdmin>
							</AdminRoute>

							<Route exact path={`${path}/orders`}>
								<MyOrders></MyOrders>
							</Route>

							<Route exact path={`${path}/review`}>
								<Review></Review>
							</Route>

							<Route exact path={`${path}/blog`}>
								<Blog></Blog>
							</Route>

							<Route exact path={`${path}/payment`}>
								<Payment></Payment>
							</Route>



						</Switch>
					}


					{
						admin &&
						<Switch>
							<Route exact path={path}>
								<DashboardHome></DashboardHome>
							</Route>

							<Route path={`${path}/makeAdmin`}>
								<MakeAdmin></MakeAdmin>
							</Route>

							<Route exact path={`${path}/addProduct`}>
								<AddService></AddService>
							</Route>

							<Route exact path={`${path}/manageAllOrders`}>
								<ManageAllOrders></ManageAllOrders>
							</Route>

							<Route exact path={`${path}/manageProducts`}>
								<ManageProducts></ManageProducts>
							</Route>

							<Route exact path={`${path}/:updateForm`}>
								<UpdateForm></UpdateForm>
							</Route>


						</Switch>
					}
				</Col>







			</Row>

		</Container>

	);
};

export default Dashboard;