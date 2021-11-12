import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { user, isLoading, admin } = useAuth();
	if (isLoading) {
		return (
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	};
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email && admin ? (
					children
				
				) : (
					<Redirect
						to={{
							pathname: "/dashboard",
							state: { from: location }
						}}
					></Redirect>
				)
			}

		>

		</Route>
	);
};

export default AdminRoute;