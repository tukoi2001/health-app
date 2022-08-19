import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    hello: "Welcome to Vuetify",
  },
  vi: {
    hello: "XIn chào to Vuetify",
  },
};

const i18n = new VueI18n({
  locale: "vi",
  fallbackLocale: "vi",
  messages,
});

export default i18n;
