<template>
  <div class="about-value">
    <v-container>
      <div class="about-value__wrapper">
        <div v-for="item in values" :key="item.id" class="about-value__item">
          <div class="about-value__item-percent">{{ item.percent }}</div>
          <div class="about-value__item-title">{{ item.title }}</div>
          <div class="about-value__item-description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutValue",
  data() {
    return {
      values: [
        {
          id: 1,
          title: "Happy Clients in 2022",
          percent: "150+",
          description:
            "Branding has never been more expansive, adventurous and agile than it is today",
        },
        {
          id: 2,
          title: "HOptimization Strategy",
          percent: "89%",
          description:
            "Branding has never been more expansive, adventurous and agile than it is today",
        },
        {
          id: 3,
          title: "Increased Traffic",
          percent: "190%",
          description:
            "Branding has never been more expansive, adventurous and agile than it is today",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.about-value {
  padding: 100px 0;
  background-image: url("../../../assets/images/about-us/background.png");
  background-repeat: no-repeat;
  background-size: cover;

  &__wrapper {
    @include flexBox();
    gap: 30px;
  }

  &__item {
    @include flexBox();
    flex-direction: column;
    gap: 20px;

    &-percent {
      @include display2();
      color: $action-purple;
    }

    &-title {
      @include headline3();
      color: $text-white;
      margin-bottom: 20px;
    }

    &-description {
      @include paragraph1();
      color: $text-normal;
      text-align: center;
    }
  }
}
</style>
