import React, { createContext } from 'react';
import useData from '../hooks/useData';
import useFirebae from '../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const allContexts = useFirebae();
	const { products, setProducts,  cancelOrder, myOrders, setMyOrders } = useData();

	const data = {
		allContexts, products, setProducts, cancelOrder, myOrders, setMyOrders
	}
	return (
		<AuthContext.Provider value={data}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;