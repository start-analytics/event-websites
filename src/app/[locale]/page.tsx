import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/hero";
import About from "@/components/About/about";
import EventsSwiper from "@/components/EventsSwiper/eventsSwiper";
import Footer from "@/components/Footer/footer";
import Intro from "@/components/Intro/intro";
// Define your navigation items
const navItems = [
	{ href: "#home", label: "home" },
	{ href: "#about", label: "about" },
	{ href: "#about-us", label: "aboutCompany" },
	{ href: "#events", label: "events" },
];
const data = [
	{ name: "Sangenjaya", image: "http://fakeimg.pl/300", alt: "Sangenjaya" },
	{ name: "Nishimizuhodai", image: "http://fakeimg.pl/300", alt: "Nishimizuhodai" },
	{ name: "Asagayakita", image: "http://fakeimg.pl/300", alt: "Asagayakita" },
	{ name: "Null", image: "http://fakeimg.pl/300", alt: "Null" },
	{ name: "Null", image: "http://fakeimg.pl/300", alt: "Null" },
];

export default function HomePage() {
	return (
		<div>
			<Navbar navItems={navItems} />
			<Hero />
			<About />
			<Intro />
			<EventsSwiper data={data} />
			<Footer />
		</div>
	);
}
