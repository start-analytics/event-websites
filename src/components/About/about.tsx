import React from "react";
import styles from "./about.module.css"; // Import CSS module
import { useTranslations } from "next-intl";

const About: React.FC = () => {
	const t = useTranslations("Homepage");

	return (
		<div id="about" className={styles.container}>
			<div className="d-flex container align-items-center justify-content-center neon-title mt-2 mb-5">{t("about")}</div>

			<div className="container">
				<img className={styles.image} src="http://fakeimg.pl/250" alt="Club Studio Time" />
				<p className={styles.content}>Founded in 2023 by a group of Visual and audio artists, Club Studio Time quickly became a home for the Denver electronic music culture as well as a global online community. At our core we are, producers, designers, and filmmakers specializing in creative productions and events where artists can have a home to showcase their sounds and guests can explore new sounds they may have never explored before. We believe in a place for artists to have a platform where they can grow and connect with their community in person and online is the key to fostering the next generation of artists. With a goal of working with boundary-breaking producers, photographers, designers, artists, filmmakers, and brands, Club Studio Time will always represent that do it yourself makers attitude in hopes to build a global community that embodies the love for sound and art.</p>
			</div>
		</div>
	);
};

export default About;
