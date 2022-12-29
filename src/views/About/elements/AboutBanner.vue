<template>
  <div class="about-banner">
    <div class="about-banner__item" v-for="item in listBanners" :key="item.id">
      <img class="about-banner__item-img" :src="item.image" :alt="item.title" />
      <div class="about-banner__item-title">{{ item.title }}</div>
      <div class="about-banner__item-subtitle">{{ item.subtitle }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutBanner",
  data() {
    return {
      listBanners: [
        {
          id: "1",
          title: "40,000+ Happy Customer",
          subtitle:
            "Empower your sales teams with industry tailored solutions that support.",
          image: require("@/assets/images/about-us/shape-01.png"),
        },
        {
          id: "2",
          title: "16 Years of Experiences",
          subtitle:
            "Empower your sales teams with industry tailored solutions that support.",
          image: require("@/assets/images/about-us/shape-02.png"),
        },
        {
          id: "3",
          title: "12 Awards Won",
          subtitle:
            "Empower your sales teams with industry tailored solutions that support.",
          image: require("@/assets/images/about-us/shape-03.png"),
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.about-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;

  &__item {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 4px;
    padding: 40px 50px;

    &-title {
      margin: 12px 0;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #292930;
    }

    &-subtitle {
      color: #777;
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
