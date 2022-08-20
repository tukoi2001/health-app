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
    home: "Homepage",
    shopping: "Shopping",
    blogs: "Blogs",
    about_us: "About Us",
    contact: "Contact",
    account_setting: "Account Setting",
    logout: "Logout",
  },
  vi: {
    top_header:
      "Do dịch COVID 19, các đơn đặt hàng có thể được xử lý chậm một chút.",
    search: "Tìm kiếm sản phẩm...",
    select_language: "Lựa chọn ngôn ngữ",
    close: "Đóng",
    home: "Trang Chủ",
    shopping: "Mua Sắm",
    blogs: "Nhật Ký",
    about_us: "Về Chúng Tôi",
    contact: "Liên Hệ",
    account_setting: "Tài Khoản",
    logout: "Đăng Xuất",
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
