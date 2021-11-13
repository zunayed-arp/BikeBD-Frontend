import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


import './Blog.css';

const Blog = () => {

	const { allContexts } = useAuth();
	const { user } = allContexts;
	const { register, handleSubmit, reset } = useForm();

	// const onSubmit = data => console.log(data);


	const onSubmit = data => {
		console.log(data);
		axios.post('https://aqueous-inlet-49489.herokuapp.com/blogs', data)
			.then(res => {
				if (res.data.insertedId) {
					alert('Succesfully Added New Blogs')
				}
				// console.log(res);
				reset();
			})


	}


	return (

		<div className="add-service">
			<h2>Post A Blog</h2>
			{/* <h3>{user.displayName}</h3>
			<img src={user.photoURL} alt="" /> */}

			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("title",)} placeholder="Title" />
				<textarea {...register("description")} placeholder="Description" />
				{/* <input {...register("duration", { required: true })} placeholder="Milage" />
				<input type="number" {...register("rating", { required: true, maxLength: 20 })} placeholder="Rating" />
				<input type="number" {...register("price")} placeholder="price" /> */}
				<input {...register("img")} placeholder="image url" />
				<input type="submit" className="btn btn-primary" />
			</form>

		</div>
	);
};

export default Blog;






	// https://i.ibb.co/cYqrz3V/picture2.jpg
	// https://i.ibb.co/qYWWJsS/picture1.jpg
	// https://i.ibb.co/gVjtDXS/picture4.jpg
	// https://i.ibb.co/0rZQcTB/picture3.jpg
	// https://i.ibb.co/2F70km3/picture5.jpg
	// https://i.ibb.co/cxNx9bV/picture6.jpg
	// https://i.ibb.co/hL400qW/pictue7.jpg
	// https://i.ibb.co/stgh7B6/picture9.jpg