// i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import JSON langsung dari internal folder
import en from "./resources/en.json";
import id from "./resources/id.json";

i18n
  .use(LanguageDetector) // Deteksi bahasa browser
  .use(initReactI18next) // Integrasi dengan React
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "id"],
    interpolation: {
      escapeValue: false, // React sudah aman dari XSS
    },
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
  });

export default i18n;
