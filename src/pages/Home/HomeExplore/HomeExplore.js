import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const HomeExplore = () => {

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios.get('http://localhost:5000/products')
			.then(res => {
				// console.log(res.data);
				setProducts(res.data);
				setIsLoading(false);
			})
	}, [])

	if (isLoading) {
		return (
			<div className="text-center my-5 py-5">
				<Spinner variant="success" animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		)
	}

	return (
		<Container className="my-5">

		<h1 className="border bg-info">Explore Bikes</h1>
			<Row>
				{
					products.slice(Math.max(products.length - 6)).map(product => {
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

export default HomeExplore;