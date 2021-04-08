import { Container } from 'react-bootstrap';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>Welcome to Proshop</h1>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
