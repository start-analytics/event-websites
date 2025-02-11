import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { generateMetadata } from "@/utils/generateMetadata";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

export { generateMetadata };

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
	const { locale } = await params; // Await params before destructuring

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) {
		console.log("cioa");
		notFound();
	}
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
