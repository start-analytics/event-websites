import "./hero.css";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
	const t = useTranslations("Metadata");
	const t_home = useTranslations("Homepage");

	const style = {
		height: "100vh", // Use the passed height or default to "100vh"
		minHeight: "100vh",
	};
	return (
		<section id="home" style={style} className="hero section">
			<img src="http://fakeimg.pl/1000" alt="" />

			<div className="container">
				<div className="row">
					<div className="d-flex flex-column align-items-center align-items-lg-center mt-5" style={{ textAlign: "center" }}>
						<h2 style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="main-title">
							{t("title")}
						</h2>
					</div>
				</div>
			</div>

			<div style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="scroll-down z-3">
				{t_home("scroll")} ↓
			</div>
		</section>
	);
};

export default Hero;
