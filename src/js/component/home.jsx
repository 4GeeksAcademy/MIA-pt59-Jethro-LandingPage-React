import React from "react";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";


//create your first component
const Home = () => {
	return (

<div className="text-center">
	<Navbar />
	<Jumbotron />
	
		<div className="Container d-flex">
			<Card />
			<Card />
			<Card />
			<Card />
 		</div>
		<Footer />
</div>

);
};

export default Home;