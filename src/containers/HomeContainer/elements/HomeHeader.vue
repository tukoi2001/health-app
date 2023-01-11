<template>
  <div class="header">
    <v-container>
      <div class="header__content">
        <div class="header__title">Opening opportunity to anyone, anywhere</div>
        <div class="header__subtitle">
          Pollock has raised a new fund of more than $80M to invest in diverse
          and traditionally overlooked entrepreneurs across nine U.S. cities.
        </div>
        <TheButton :size="'large'">Get started</TheButton>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "HomeHeader",
  components: { TheButton },
});
</script>

<style lang="scss" scoped>
.header {
  @include flexBox(flex-start);
  height: 100%;
  width: 100%;
  max-height: 950px;
  margin-top: -100px;
  background-image: url("../../../assets/images/home/header.png");
  background-size: cover;
  background-repeat: no-repeat;

  &__content {
    max-width: 770px;
  }

  &__title {
    @include display1();
    color: $text-white;
  }

  &__subtitle {
    @include headline3();
    color: $text-white;
    margin: 50px 0 70px;
  }
}
</style>
