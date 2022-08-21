import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { i18n } from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import VueToast from "vue-toast-notification";

import "@/styles/reset.css";
import "../node_modules/nprogress/nprogress.css";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(PerfectScrollbar);
Vue.use(FlagIcon);
Vue.use(VueToast, {
  position: "top-right",
});

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
