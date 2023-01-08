<template>
  <div class="subscription">
    <v-container>
      <div class="subscription__wrapper">
        <div class="subscription__title">
          We design & develop transformation user experiences from Silicon
          Valley
        </div>
        <div class="subscription__subtitle">
          Are you ready to start your project? Contact us today and get started!
        </div>
        <TheButton>Get Started</TheButton>
        <span class="subscription__icon subscription__icon-dot1" />
        <span class="subscription__icon subscription__icon-dot2" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "TheSubscription",
  components: {
    TheButton,
  },
});
</script>

<style lang="scss" scoped>
.subscription {
  padding: 106px 0;
  background-color: $background-light-alt;

  &__wrapper {
    @include flexBox();
    position: relative;
    flex-direction: column;
  }

  &__title {
    @include display3();
    max-width: 870px;
    padding-bottom: 30px;
    color: $text-heading;
    text-align: center;
  }

  &__subtitle {
    @include headline3();
    color: $text-normal;
    padding-bottom: 65px;
  }

  &__icon {
    position: absolute;

    &-dot1 {
      top: 0;
      left: 0;
      height: 15px;
      width: 15px;
      background-color: $action-blue-turquoise;
      border-radius: 50%;
    }

    &-dot2 {
      bottom: 20px;
      right: 0;
      height: 30px;
      width: 30px;
      background-color: $action-yellow;
      border-radius: 50%;
    }
  }
}
</style>
