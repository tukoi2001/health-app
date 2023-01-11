<template>
  <div class="best-experience">
    <v-container>
      <div class="best-experience__wrapper">
        <div class="best-experience__title">We offer the best experience</div>
        <div class="best-experience__subtitle">
          When launching a startup, having the right tech tools in place can
          help set you up for success
        </div>
        <div class="best-experience__card">
          <div class="best-experience__card-description">
            <div class="description__title">
              Digital agency in New York City
            </div>
            <div class="description__subtitle">
              We're a user experience design agency focused on improving
              conversion and increasing customer engagement.
            </div>
            <div class="description__action">
              What we do <ArrowRight class="description__icon" />
            </div>
          </div>
          <div class="best-experience__services">
            <div class="best-experience__services-item">
              <div class="service__item">
                <PhotoShop />
                <div class="service__title">User Experience</div>
                <div class="service__description">
                  We create world-class apps, digital products, web, and
                  branding.
                </div>
              </div>
            </div>
            <div class="best-experience__services-item">
              <div class="service__item">
                <CoffeeIcon />
                <div class="service__title">Digital Strategy</div>
                <div class="service__description">
                  We create world-class apps, digital products, web, and
                  branding.
                </div>
              </div>
              <div class="service__item">
                <PenIcon />
                <div class="service__title">Web Design</div>
                <div class="service__description">
                  We create world-class apps, digital products, web, and
                  branding.
                </div>
              </div>
            </div>
          </div>
          <div class="best-experience__card-circle"></div>
          <div class="best-experience__card-rectangle"></div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ArrowRight from "@/components/ui/ArrowRight.vue";
import PhotoShop from "@/components/ui/PhotoShop.vue";
import CoffeeIcon from "@/components/ui/CoffeeIcon.vue";
import PenIcon from "@/components/ui/PenIcon.vue";

export default Vue.extend({
  name: "BestExperience",
  components: {
    ArrowRight,
    PhotoShop,
    CoffeeIcon,
    PenIcon,
  },
});
</script>

<style lang="scss" scoped>
.best-experience {
  padding: 120px 0;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
  }

  &__title {
    @include display2();
    color: $text-heading;
  }

  &__subtitle {
    @include paragraph1();
    color: $text-normal;
    margin-top: 30px;
  }

  &__card {
    @include flexBox();
    position: relative;
    gap: 130px;
    margin-top: 90px;

    &-description {
      max-width: 285px;

      .description {
        &__title {
          @include headline2();
          color: $text-heading;
        }

        &__subtitle {
          @include paragraph1();
          color: $text-normal;
          margin: 30px 0 50px;
        }

        &__action {
          @include linkLarge();
          color: $action-purple;
        }

        &__icon {
          margin-left: 10px;
        }
      }
    }

    &-circle {
      position: absolute;
      top: 50px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: $action-purple;
    }

    &-rectangle {
      position: absolute;
      bottom: 50px;
      left: 200px;
      width: 75px;
      height: 75px;
      background-color: $action-blue-turquoise;
      opacity: 0.8;
      transform: rotate(45deg);
    }
  }

  &__services {
    @include flexBox();
    gap: 30px;

    &-item {
      @include flexBox();
      gap: 30px;
      flex-direction: column;
    }

    .service {
      &__item {
        @include flexBox();
        flex-direction: column;
        text-align: center;
        gap: 20px;
        padding: 45px 35px 60px;
        background: $background-white;
        box-shadow: 0px 20px 50px rgba(79, 119, 255, 0.2);
        border-radius: 20px;
      }

      &__title {
        @include headline3;
        color: $text-primary;
      }

      &__description {
        @include paragraph2();
        color: $text-normal;
      }
    }
  }
}
</style>
