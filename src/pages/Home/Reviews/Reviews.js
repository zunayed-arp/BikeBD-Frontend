import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

import './Reviews.css';

const Reviews = () => {
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		axios.get(`https://aqueous-inlet-49489.herokuapp.com/reviews`)
			.then(res => {
				const gotProduct = res.data;
				setReviews(gotProduct);
			})
	}, [])

	return (
		<>

			<Container>
				<h1 className="border bg-info">Customer Review</h1>
				<Row>

					{
						reviews.slice(-6).map(review => <Review
							key={review._id}
							review={review}
						>
						</Review>)


					}
				</Row>

			</Container>


		</>
	);
};



const Review = ({ review }) => {
	const { description, rating, name } = review;
	const rate = parseInt(rating)
	return (
		<Col md={4} className="border mx-5 my-3">

			<Card.Title>Review by {name}</Card.Title>
			<Card.Body >
				<Card.Text>
					{description}
				</Card.Text>

				<Card.Text>
					Rated by {name}
					<br />
					<Rating
						initialRating={rate}
						emptySymbol="far fa-star icon-color"
						fullSymbol="fas fa-star icon-color"
						readonly></Rating>
				</Card.Text>
			</Card.Body>
			{/* <Card border="primary" style={{ width: '18rem' }}>
				<Card.Header>Header</Card.Header>
				<Card.Body>
					<Card.Title>Primary Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk
						of the card's content.
					</Card.Text>
				</Card.Body>
			</Card> */}
		</Col>

	);
};

export default Reviews;