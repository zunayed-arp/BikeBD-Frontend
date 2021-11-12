import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddService from '../AddService/AddService';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';

const Dashboard = () => {
	let { path, url } = useRouteMatch();
	const { allContexts } = useAuth();
	const { admin, user } = allContexts;
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

						<ListGroup.Item variant="secondary">
							<Link to={`${url}/orders`}><button>My Orders</button></Link>
						</ListGroup.Item>

						<ListGroup.Item variant="secondary">
							<Link to={`${url}/review`}><button>Review</button></Link>
						</ListGroup.Item>

						{
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
							</>
						}

						<ListGroup.Item variant="warning">
							<Link to={`${url}/payment`}><button>Payment</button></Link>
						</ListGroup.Item>



						<ListGroup.Item variant="info">Logout</ListGroup.Item>

						<ListGroup.Item variant="dark">Dark</ListGroup.Item>
					</ListGroup>

				</Col>

				<Col xs={12} md={8} className="border border-4 bg-info">
					<Switch>
						<Route exact path={path}>
							<DashboardHome></DashboardHome>
						</Route>

						<Route path={`${path}/makeAdmin`}>
							<MakeAdmin></MakeAdmin>
						</Route>

						<Route exact path={`${path}/orders`}>
							<MyOrders></MyOrders>
						</Route>

						<Route exact path={`${path}/review`}>
							<Review></Review>
						</Route>

						<Route exact path={`${path}/addProduct`}>
							<AddService></AddService>
						</Route>

						<Route exact path={`${path}/manageAllOrders`}>
							<ManageAllOrders></ManageAllOrders>
						</Route>
					</Switch>
				</Col>

			</Row>

		</Container>

	);
};

export default Dashboard;