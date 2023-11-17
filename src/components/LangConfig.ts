import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  en: {
    common: {
    },
    aboutme: {
      Position: "Data Scientist & Python Developer",
    }
  },
  fr: {
    common: {
    },
    aboutme: {
      Position: "Data Scientist & Développeur Python",
    }
  },
};


i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || "en",
  resources: resources,
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
