import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { allContexts, isLoading } = useAuth();
	const {user} = allContexts;

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
				user?.email? (children) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					></Redirect>
				)
			}

		>

		</Route>
	);
};

export default PrivateRoute;