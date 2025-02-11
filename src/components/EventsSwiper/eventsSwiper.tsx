"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useTranslations } from "next-intl";

type Client = {
	image: string;
	name: string;
	alt: string;
};

type ClientsSwiperProps = {
	data: Client[];
};

const ClientSlide: React.FC<Client> = ({ image, name, alt }) => (
	<div className="text-center">
		<img src={image} alt={alt} className="mx-auto" />
		<h3 className="mt-3">{name}</h3>
	</div>
);

export default function EventsSwiper({ data }: ClientsSwiperProps) {
	const t = useTranslations("Homepage");
	let slidesPerView = 4;
	if (data.length < 4) slidesPerView = data.length;

	// Swiper settings
	const swiperConfig = {
		modules: [Autoplay],
		loop: true,
		slidesPerView: slidesPerView,
		effect: "coverflow" as const,

		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {
			0: {
				// Breakpoint for screens >= 0px
				slidesPerView: 2,
			},
			768: {
				// Breakpoint for screens >= 768px
				slidesPerView: 3,
			},
			1024: {
				// Breakpoint for screens >= 1024px
				slidesPerView: 4,
			},
		},
	};

	return (
		<div id="events">
			<div className="d-flex container align-items-center justify-content-center neon-title mt-5 mb-5">{t("upcomingEvents")}</div>

			<div className="sample-slider container pb-5">
				<Swiper {...swiperConfig}>
					{data.map((client, index) => (
						<SwiperSlide key={index}>
							<ClientSlide {...client} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
