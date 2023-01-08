import Vue from "vue";
import VueI18n from "vue-i18n";
import { languages } from "./index";

Vue.use(VueI18n);

const messages = Object.assign(languages);

const changeLocate = (locale: string) => {
  i18n.locale = locale;
};

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export { i18n, changeLocate };
