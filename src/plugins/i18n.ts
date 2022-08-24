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
    back_to_home: "Back To Home",
    login: "Login",
    forgot_username_password: "Forgot Username / Password?",
    create_new_account: "Create New Account",
    email: "Email",
    password: "Password",
    least_characters: "At least 8 characters.",
    register: "Register",
    already_have_account: "Already have an account?",
    full_name: "Full Name",
    repeat_password: "Repeat Password",
    password_must_identical: "Passwords must be identical",
    must_accept_terms_and_conditions: "Must accept terms and conditions!",
    agree_all_terms_and_conditions:
      "I agree all statements in Terms of Conditions.",
    required: "Required.",
    invalid_email: "Invalid e-mail.",
    repeat_password_not_match: "The repeat password does not match!",
    forget_password: "Forget Password",
    submit: "Submit",
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
    back_to_home: "Trở về trang chủ",
    login: "Đăng Nhập",
    forgot_username_password: "Quên tên đăng nhập / mật khẩu?",
    create_new_account: "Tạo tài khoản mới",
    email: "Email",
    password: "Mật khẩu",
    least_characters: "Ít nhất 8 ký tự",
    register: "Đăng ký",
    already_have_account: "Bạn đã có tài khoản rồi?",
    full_name: "Tên đầy đủ",
    repeat_password: "Nhập lại mật khẩu",
    password_must_identical: "Mật khẩu phải giống hệt nhau",
    must_accept_terms_and_conditions:
      "Phải chấp nhận các điều khoản và điều kiện!",
    agree_all_terms_and_conditions:
      "Tôi đồng ý tất cả các tuyên bố trong Điều khoản Điều kiện.",
    required: "Yêu cầu bắt buộc.",
    invalid_email: "Email không đúng định dạng.",
    repeat_password_not_match: "Mật khẩu nhập lại không khớp!",
    forget_password: "Quên mật khẩu",
    submit: "Xác nhận",
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
