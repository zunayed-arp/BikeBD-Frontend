import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import HomeExplore from "../HomeExplore/HomeExplore";
import Reviews from "../Reviews/Reviews";

const Home = () => {
	return (
		<div>
			<Navigation></Navigation>
			<Banner></Banner>
			<HomeExplore></HomeExplore>
			<Reviews></Reviews>
			<Blogs></Blogs>
			<Footer></Footer>

		</div>
	);
};

export default Home;
