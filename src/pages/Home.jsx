import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Industry from '../components/Industry';
import Services from '../components/Services';
const Home = () => {
	return (
		<main className="container font-roboto-slab text-[15px]">
			<header className="max-w-sm mx-auto">
				<img src={logo} alt="" />
			</header>
			<Hero />
			<Services />
			<Industry />
			<Footer />
		</main>
	);
};

export default Home;
