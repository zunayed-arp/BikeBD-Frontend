import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const url = `https://aqueous-inlet-49489.herokuapp.com/blogs`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setBlogs(data)
				// console.log(data)
			})
	}, [])
	return (
		<>

			<Container>
				<h1>Blogs</h1>
				<Row>
					{
						blogs.map(blog =>

							<Col

								key={blog._id}>
								<div class="card  justify-content-center align-items-center" style={{ width: '18rem' }} >
									<img src={blog?.img} className="card-img-top" alt="" />
									<div class="card-body">
										<h5 class="card-title">{blog?.title}</h5>
										<p>{blog?.description}</p>
									</div>
								</div>
							</Col>


						)
					}
				</Row>
			</Container>

		</>
	);
};




export default Blogs;