import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Carregar arquivos de tradução
  .use(LanguageDetector) // Detectar idioma do navegador
  .use(initReactI18next) // Integração com React
  .init({
    fallbackLng: "en", // Idioma padrão caso o idioma do usuário não seja suportado
    supportedLngs: ["en", "pt"], // Idiomas suportados
    debug: true,
    interpolation: {
      escapeValue: false, // React já escapa automaticamente
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Caminho para os arquivos de tradução
    },
  });

export default i18n;
