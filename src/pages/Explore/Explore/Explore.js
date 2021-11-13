import React from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Explore = () => {
	const { products,  loading } = useAuth();

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
		<>
			<Navigation />
			<Container>

				<h1>Explore Our Products</h1>
				<Row>
					{
						products.map(product => {
							return (
								<Product
									key={product._id}
									product={product}
								>
								</Product>
							);
						})
					}
				</Row>
			</Container>

			<Footer />
		</>
	);
};



const Product = ({ product }) => {
	const { title, _id, img, description, price } = product;

	return (

		<Col className="my-3" md={6} lg={4}>
			<Card>
				<Card.Img style={{ height: "250px" }} variant="top" src={img} />
				<Card.Body>
					<Card.Title>
						<h4>{title}</h4>
					</Card.Title>
					<Card.Text>
						{description.slice(0, 100)}
					</Card.Text>
					<Card.Title>
						<h4 style={{ minHeight: "60px" }}>PRICE:{price}$</h4>
					</Card.Title>
					<NavLink to={`/products/${_id}`} className="w-100 btn btn-primary">
						Purchase
					</NavLink>
				</Card.Body>
			</Card>
		</Col>

	);
};

export default Explore;