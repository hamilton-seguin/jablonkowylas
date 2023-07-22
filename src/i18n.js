import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/common"; // Import your English translations
import pl from "../locales/pl/common"; // Import your French translations

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
  lng: "en", // Set the default language here
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;