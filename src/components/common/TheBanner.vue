<template>
  <div class="banner">
    <v-container>
      <div class="banner__wrapper">
        <div class="banner__title">{{ title }}</div>
        <div class="banner__description">{{ description }}</div>
        <TheButton :onClick="onClick">{{ btnText }}</TheButton>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "../FormUI/TheButton.vue";

export default Vue.extend({
  name: "TheBanner",
  components: {
    TheButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    btnText: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: () => {
        //
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("../../assets/images/contact-us/banner.png");
  padding: 100px 0;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    text-align: center;
  }

  &__title {
    @include display3();
    max-width: 970px;
    color: $text-heading;
  }

  &__description {
    @include headline3();
    color: $text-normal;
    margin: 30px 0 75px;
  }
}
</style>
