import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LOCALES, SITE_URL, DEFAULT_LOCALE } from "@config/const";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const { locale } = await getParams(params);
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		metadataBase: new URL(SITE_URL),
		title: t("title"),
		description: t("description"),
		alternates: {
			canonical: `${SITE_URL}${locale === DEFAULT_LOCALE ? "" : "/" + locale}`,
			languages: {
				...Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}${l === DEFAULT_LOCALE ? "" : "/" + l}`])),
				"x-default": `${SITE_URL}`,
			},
		},
		openGraph: {
			title: t("title"),
			description: t("description"),
			images: [
				{
					url: "/android-chrome-192x192.png",
					width: 800,
					height: 600,
					alt: t("title"),
				},
			],
			type: "website",
		},
		robots: {
			index: true,
			follow: true,
		},
		icons: {
			icon: ["/favicon.ico?v=5"],
			apple: ["/apple-touch-icon.png?v=5"],
			shortcut: ["/apple-touch-icon.png"],
		},
		manifest: "/site.webmanifest",
	};
}

// Helper function to ensure params are resolved correctly
async function getParams(params: { locale: string }) {
	return new Promise<{ locale: string }>((resolve) => {
		resolve(params);
	});
}
