<template>
  <div class="page-platform">
    <v-container>
      <div class="page-platform__wrapper">
        <div class="page-platform__title">
          Across all platforms and brand touch points
          <div class="page-platform__description">
            We work closely with our clients to define, design and develop
            transformative user experiences
          </div>
        </div>
        <div class="page-platform__card"></div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PagePlatform",
});
</script>

<style lang="scss" scoped>
.page-platform {
  padding: 120px 0;

  &__title {
    @include display2();
    @include flexBox();
    flex-direction: column;
    color: $text-heading;
    margin-bottom: 70px;
    text-align: center;
  }

  &__description {
    @include paragraph1();
    margin-top: 30px;
    color: $text-normal;
  }

  &__card {
    min-height: 560px;
    max-height: 560px;
    background-image: url("@/assets/images/pages/map.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
