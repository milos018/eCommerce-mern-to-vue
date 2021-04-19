import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/product/:productId' component={ProductScreen} />
					<Route path='/cart/:productId?' component={CartScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
