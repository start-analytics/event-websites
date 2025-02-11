import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

type Props = {
	children: ReactNode;
	params: Promise<{ locale: string }>; // Explicitly mark `params` as a Promise
};

export async function generateMetadata({ params }: Props) {
	const { locale } = await params;

	const t = await getTranslations({ locale: locale, namespace: "Metadata" });

	return {
		title: t("title"),
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
