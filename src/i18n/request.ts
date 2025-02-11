import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Define a type for the locale based on the available locales in routing.locales
	type Locale = (typeof routing.locales)[number]; // This extracts a union type of the locales

	// Ensure that a valid locale is used
	if (!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
