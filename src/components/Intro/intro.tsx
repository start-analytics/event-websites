import { useTranslations } from "next-intl";
import React from "react";

const Intro: React.FC = () => {
	const t = useTranslations("Homepage");
	const t_meta = useTranslations("Metadata");

	return (
		<div>
			<div className="d-flex mb-5 mt-3 container align-items-center justify-content-center neon-title ">{t("companyPresents")}</div>

			<div className="d-flex align-items-center justify-content-center">
				<div className="container">
					<div className="row align-items-center">
						{/* Image Section */}
						<div className="col-12 col-md-6 text-center">
							<img src="http://fakeimg.pl/400" alt="Music Cover" width={400} height={300} className="img-fluid" />
						</div>

						{/* Text Section */}
						<div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
							<h1 className="fw-bold">{t_meta("title")}</h1>
							<h3 className="fw-light">{t_meta("title")}</h3>
							<p className="mt-3">{t_meta("title")}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
