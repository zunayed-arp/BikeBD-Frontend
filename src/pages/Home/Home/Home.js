import React from "react";
import Review from "../../Dashboard/Review/Review";
import Navigation from "../../Shared/Navigation/Navigation";
import UploadImage from "../../Shared/UploadImage/UploadImage";
import Banner from "../Banner/Banner";
import HomeExplore from "../HomeExplore/HomeExplore";
import Reviews from "../Reviews/Reviews";

const Home = () => {
	return (
		<div>
			<Navigation></Navigation>
			<Banner></Banner>
			<HomeExplore></HomeExplore>
			<Reviews></Reviews>

		</div>
	);
};

export default Home;
