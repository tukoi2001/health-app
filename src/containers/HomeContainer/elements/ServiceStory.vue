<template>
  <div class="service-story">
    <v-container>
      <div class="service-story__wrapper">
        <div class="service-story__title">
          Explore our recent client success stories and witness our full 360
          transformations come to life
        </div>
        <div class="service-story__card">
          <div class="service-story__card-item">
            <img
              :src="require('@/assets/images/home/card-1.jpg')"
              alt="card-1"
            />
            <div class="service-story__card-title">UX/UI Design</div>
          </div>
          <div class="service-story__card-item is-small">
            <img
              :src="require('@/assets/images/home/card-2.jpg')"
              alt="card-2"
            />
            <div class="service-story__card-title">NFT Market UI</div>
          </div>
          <div class="service-story__card-item is-small">
            <img
              :src="require('@/assets/images/home/card-3.jpg')"
              alt="card-3"
            />
            <div class="service-story__card-title">Health Mobile App</div>
          </div>
          <div class="service-story__card-item">
            <img
              :src="require('@/assets/images/home/card-4.jpg')"
              alt="card-4"
            />
            <div class="service-story__card-title">Wallet App Development</div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ServiceStory",
});
</script>

<style lang="scss">
.service-story {
  padding: 120px;
  background-color: $background-white;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 100px;
  }

  &__title {
    @include headline1();
    max-width: 970px;
    color: $text-heading;
    text-align: center;
  }

  &__card {
    @include flexBox();
    flex-wrap: wrap;
    gap: 30px;

    &-item {
      width: calc(59% - 15px);

      &.is-small {
        width: calc(41% - 15px);
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      @include headline3();
      margin-top: 30px;
      color: $action-blue;
    }
  }
}
</style>
