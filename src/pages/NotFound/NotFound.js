import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
	return (
		<div>
		<Navigation/>
			<h1>404</h1>
			<br/>
			<h1>Page Not Found</h1>
			<Footer/>
		</div>
		
	);
};

export default NotFound;