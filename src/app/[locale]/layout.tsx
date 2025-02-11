import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { LOCALES, SITE_URL, DEFAULT_LOCALE } from "@config/const";

type Props = {
	children: ReactNode;
	params: Promise<{ locale: string }>; // Explicitly mark `params` as a Promise
};

export async function generateMetadata({ params }: Props) {
	const { locale } = await params;

	const t = await getTranslations({ locale: locale, namespace: "Metadata" });

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

export default async function LocalLayout({ children, params }: Props) {
	// Await params before accessing locale
	const { locale } = await params;

	// Validate the locale
	if (!routing.locales.includes(locale)) {
		notFound();
	}

	// Fetch messages for the locale
	const messages = await getMessages({ locale });

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
