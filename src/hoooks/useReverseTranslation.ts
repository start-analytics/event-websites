import { useTranslations } from "next-intl";

const useReverseTranslation = (namespace: string) => {
	const t = useTranslations(namespace);

	return (key: string) => {
		return t(key, { defaultValue: key }); // Returns translation if exists, otherwise the original key
	};
};

export default useReverseTranslation;
