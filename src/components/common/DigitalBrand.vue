<template>
  <v-container>
    <div class="digital-brand">
      <div class="digital-brand__bottom">
        <div class="digital-brand__bottom-title">
          Working with the most trusted brands in the industry
        </div>
        <div class="digital-brand__bottom-brand">
          <img
            v-for="item in brands"
            :key="item.id"
            :src="item.img"
            :alt="item.title"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DigitalBrand",
  data() {
    return {
      brands: [
        {
          id: 1,
          img: require("@/assets/images/home/google.svg"),
          title: "google",
        },
        {
          id: 2,
          img: require("@/assets/images/home/netflix.svg"),
          title: "netflix",
        },
        {
          id: 3,
          img: require("@/assets/images/home/slack.svg"),
          title: "slack",
        },
        {
          id: 4,
          img: require("@/assets/images/home/intercom.svg"),
          title: "intercom",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.digital-brand {
  padding: 120px 0;
  background-color: $background-white;

  &__bottom {
    &-title {
      @include headline2();
      color: $text-black;
      text-align: center;
    }

    &-brand {
      @include flexBox();
      gap: 105px;
      margin-top: 120px;
    }
  }
}
</style>
