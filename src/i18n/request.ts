import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { LOCALES } from "@/config/const";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Ensure that a valid locale is used
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
