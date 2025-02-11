"use client";

import { useState, useEffect } from "react";
import { initializeMobileNavToggle, initializeMobileNavCloseOnLinkClick, initializeScrollspy } from "@utils/navbarScripts";
import "./navbar.css";
import useReverseTranslation from "@/hoooks/useReverseTranslation";
import { Link } from "@/i18n/routing";

// Define types for the nav items
interface NavItem {
	href: string;
	label: string;
}

// Define the Navbar props type
interface NavbarProps {
	navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
	const getTranslation = useReverseTranslation("Homepage"); // You can change the namespace
	const [isMobileNavActive, setIsMobileNavActive] = useState<boolean>(false);

	useEffect(() => {
		const cleanupToggle = initializeMobileNavToggle(setIsMobileNavActive);
		const cleanupCloseOnClick = initializeMobileNavCloseOnLinkClick();
		const cleanupScrollspy = initializeScrollspy();

		return () => {
			cleanupToggle();
			cleanupCloseOnClick();
			cleanupScrollspy();
		};
	}, []);

	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-center">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<img src="http://fakeimg.pl/500" className="logo-img margin-right-13" alt="logo" />
						</div>
					</Link>
					<nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
						<ul>
							{navItems.map(({ href, label }, index) => (
								<li key={href}>
									<a className={`nav-item ${index === 0 ? "active" : ""}`} href={href}>
										{getTranslation(label)}
									</a>
								</li>
							))}
						</ul>
						<i className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? "bi-x" : "bi-list"}`} />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
