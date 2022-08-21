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
    shopping_now: "Shopping Now!",
    subtitle_mask:
      "Prevent millions of harmful bacteria, and dust to protect health.",
    subtitle_spray: "Get rid of all bacteria in your home.",
    subtitle_teeth: "Keep your teeth white, bright.",
    anti_bacterial: "Anti-Bacterial",
    anti_virus: "Anti-Virus",
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
    shopping_now: "Mua Sắm Ngay!",
    subtitle_mask:
      "Ngăn chặn hàng triệu vi khuẩn có hại, bụi bẩn để bảo vệ sức khỏe.",
    subtitle_spray: "Loại bỏ tất cả vi khuẩn trong nhà của bạn.",
    subtitle_teeth: "Giữ cho hàm răng của bạn luôn trắng sáng.",
    anti_bacterial: "Chống vi khuẩn",
    anti_virus: "Chống vi rút",
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
