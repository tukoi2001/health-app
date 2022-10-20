<template>
  <div class="home-product">
    <v-row
      class="home-product__item"
      v-for="product in products"
      :key="product.id"
      :style="className(product.isReverse)"
    >
      <v-col cols="6">
        <div class="home-product__image">
          <img :src="product.image" :alt="product.title" />
        </div>
      </v-col>
      <v-col cols="6">
        <div class="home-product__content">
          <div class="home-product__content-title">{{ product.title }}</div>
          <div class="home-product__content-subtitle">
            {{ product.subtitle }}
          </div>
          <div class="home-product__content-action">
            <v-btn type="submit" rounded color="#fd8d27">
              {{ $t("shopping_now") }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HomeProduct",
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Four-layer medical mask",
          subtitle:
            "The four-layer medical mask for the ability to protect and filter bacteria and dirt is superior to ordinary medical masks with four layers, including: the outermost waterproof non-woven fabric layer, the microfiltration layer. , activated carbon layer and anti-mold desiccant layer on the inside.",
          image: require("@/assets/images/home-product/mask.png"),
          isReverse: false,
        },
        {
          id: 2,
          title: "Electric toothbrush",
          subtitle:
            "Bàn chải đánh răng điện có thể là một thay thế tuyệt vời đối với bàn chải đánh răng thông thường, đặc biệt là đối với trẻ em, người khuyết tật, người già và những người gặp vấn đề sức khỏe liên quan đến viêm khớp, hay những bệnh lý khác khiến họ khó khăn khi thực hiện những động tác chải răng.",
          image: require("@/assets/images/home-product/ban-chai-danh-rang-dien.jpg"),
          isReverse: true,
        },
        {
          id: 3,
          title: "Ruta Gel Hand Sanitizer",
          subtitle:
            "Rửa tay bằng các sản phẩm làm sạch luôn được Bộ Y tế khuyến khích thực hiện thường xuyên trong cuộc sống hằng ngày để đảm bảo vệ sinh và an toàn cho sức khỏe. Mỗi ngày chúng ta thường tiếp xúc với rất nhiều đồ dùng, nhiều môi trường khác nhau.",
          image: require("@/assets/images/home-product/nuoc-rua-tay.jpg"),
          isReverse: false,
        },
        {
          id: 4,
          title: "Omron Modern Wrist Blood Pressure Monitor",
          subtitle:
            "Máy đo huyết áp cổ tay Omron HEM-6161 sử dụng công nghệ cảm biến điện tử Intellisense thế hệ thứ hai 2020 mới tự động hoàn toàn, đơn giản, dễ sử dụng, cho kết quả chính xác. Đặc biệt, máy tự động dò tìm vị trí đặt cổ tay đúng tư thế, bạn nên đặt máy ở vị trí cổ tay trái, nơi đeo đồng hồ.",
          image: require("@/assets/images/home-product/may-do-huyet-ap.jpg"),
          isReverse: true,
        },
      ],
    };
  },
  methods: {
    className(isReverse: boolean): string {
      return isReverse ? "flex-flow: row-reverse;" : "";
    },
  },
});
</script>

<style lang="scss" scoped>
.home-product {
  border-top: 2px solid #f0f2f5;
  border-bottom: 2px solid #f0f2f5;
  padding: 30px 20px;

  &__item {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 4px;
    padding: 10px;

    &:not(:first-of-type) {
      margin-top: 25px;
    }
  }

  &__image {
    height: 420px;
    width: auto;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 20px;

    &-title {
      color: #103178;
      font-size: 50px;
      font-weight: 600;
      line-height: 60px;
      margin-bottom: 20px;
    }

    &-subtitle {
      color: #103178;
      font-size: 17px;
      font-weight: 400;
      line-height: 26px;
      margin-bottom: 20px;
    }

    &-action {
      .v-btn {
        height: 50px !important;
        color: #fff !important;
        font-size: 16px;
        font-weight: 600;
        line-height: 23px;
      }
    }
  }
}
</style>
