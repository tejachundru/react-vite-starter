import i18next, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { type HttpBackendOptions } from "i18next-http-backend";

import en from "./en/translations.json";
import es from "./es/translations.json";
import { isProduction } from "@/lib/utils";

type TranslationKeys = typeof en; // Assuming `en` and `es` have the same structure

const translations: Record<string, { translations: TranslationKeys }> = {
  en: {
    translations: en,
  },
  es: {
    translations: es,
  },
};

const config: InitOptions<HttpBackendOptions> = {
  supportedLngs: ["en", "es"],
  ns: ["translations"],
  defaultNS: "translations",
  fallbackLng: "en",
  debug: !isProduction,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: translations,
  backend: {
    loadPath: "/locales/{{lng}}/translations.json",
  },
};

const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  .use(LanguageDetector)
  // backend plugin
  .use(Backend)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(config);

export default i18n;
