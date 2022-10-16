<template>
  <div class="popular-category">
    <div class="popular-category__title">
      {{ $t("popular_categories") }}
    </div>
    <div class="popular-category__box">
      <div
        class="popular-category__item"
        v-for="category in categories"
        :key="category.id"
      >
        <div class="popular-category__item-image">
          <img :src="category.image" :alt="category.name" />
        </div>
        <div class="popular-category__item-title">
          {{ category.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PopularCategory",
  data() {
    return {
      categories: [
        {
          id: "1",
          name: "Bandages",
          image: require("@/assets/images/popular-category/plastercross.svg"),
        },
        {
          id: "2",
          name: "Capsules",
          image: require("@/assets/images/popular-category/capsule.svg"),
        },
        {
          id: "3",
          name: "Dental",
          image: require("@/assets/images/popular-category/dental.svg"),
        },
        {
          id: "4",
          name: "Thermometer",
          image: require("@/assets/images/popular-category/thermometer.svg"),
        },
        {
          id: "5",
          name: "Heart Health",
          image: require("@/assets/images/popular-category/heart-healt.svg"),
        },
        {
          id: "6",
          name: "Microscope",
          image: require("@/assets/images/popular-category/microscope.svg"),
        },
        {
          id: "7",
          name: "Tubes",
          image: require("@/assets/images/popular-category/tube.svg"),
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.popular-category {
  margin: 20px 0;

  &__title {
    color: #103178;
    font-weight: 700;
    line-height: 35px;
    font-size: 26px;
    margin-bottom: 20px;
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &-image {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      width: 90px;
      border-radius: 50%;
      border: 1px solid #103178;
      background-color: #f0f2f5;
      cursor: pointer;

      & > img {
        display: block;
        object-fit: cover;
      }
    }

    &-title {
      color: #103178;
      font-weight: 600;
      font-size: 17px;
      line-height: 26px;
      margin-top: 10px;
    }
  }
}
</style>
