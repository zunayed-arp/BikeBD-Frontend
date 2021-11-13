import { useEffect, useState } from "react"


const useData = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);



	useEffect(() => {
		fetch('https://aqueous-inlet-49489.herokuapp.com/products')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setProducts(data);
				setLoading(false);
			})
	}, [])



	// useEffect(() => {
	// 	axios.get(`https://aqueous-inlet-49489.herokuapp.com/orders/${user.email}`)
	// 		.then(res => {
	// 			setMyOrders(res.data);
	// 		});
	// }, [user.email]);

	// const cancelOrder = (id) => {
	// 	const cofirmation = window.confirm('confirm to delete!');
	// 	if (cofirmation) {
	// 		axios.delete(`https://aqueous-inlet-49489.herokuapp.com/delete/${id}`)
	// 			.then(res => {
	// 				if (res.data === 1) {
	// 					const rest = myOrders.filter(order => order._id !== id);
	// 					setMyOrders(rest);
	// 					alert('succesfull deletion');
	// 				} else {
	// 					alert('Something went wrong!!');
	// 				}

	// 			});
	// 	}
	// };

	return {
		products, setProducts, loading
	}

}





export default useData;