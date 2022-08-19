import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    top_header:
      "Due to the COVID 19 epidemic, orders may be processed with a slight delay.",
    search: "Search for products...",
    select_language: "Select language",
    close: "Close",
  },
  vi: {
    top_header:
      "Do dịch COVID 19, các đơn đặt hàng có thể được xử lý chậm một chút.",
    search: "Tìm kiếm sản phẩm...",
    select_language: "Lựa chọn ngôn ngữ",
    close: "Đóng",
  },
};

const changeLocate = (locale: string) => {
  i18n.locale = locale;
};

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export { i18n, changeLocate };
