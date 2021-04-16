import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					'http://localhost:5500/api/v1/products',
				);
				setProducts(response.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getProducts();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
