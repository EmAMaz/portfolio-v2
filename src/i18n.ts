import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './locales/en/en.json'
import esJSON from './locales/es/es.json'

i18n.use(initReactI18next).init({
 resources: {
    en:{ ...enJSON},
    es:{ ...esJSON},
 }, // Where we're gonna put translations' files
 lng: "en",     // Set the initial language of the App
});