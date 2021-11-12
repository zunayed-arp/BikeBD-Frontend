import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Explore = () => {
	const { products, setProducts} = useAuth();

	return (
		<Container>
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