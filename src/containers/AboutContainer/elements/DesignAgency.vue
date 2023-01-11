<template>
  <div class="design-agency">
    <v-container>
      <div class="design-agency__wrapper">
        <div class="design-agency__content">
          <div v-if="currentTab === 1" class="design-agency__content-item">
            <div class="design-agency__content-title">
              SEO-focused WordPress web design and marketing agency
              <div class="design-agency__content-description">
                A brand today is all about how it makes your customers feel.
                It's not a logo, visual identity, or digital product design. but
                rather a cohesive system that spans across all mediums and touch
                points. We're a branding agency offering a complete solution
                from naming and logo design to communications and style guides.
              </div>
              <TheButton>Learn More</TheButton>
            </div>
            <div class="design-agency__content-image">
              <img
                :src="require('@/assets/images/about-us/Img.png')"
                alt="image-2"
              />
            </div>
          </div>
          <div v-else-if="currentTab === 2" class="design-agency__content-item">
            <div class="design-agency__content-title">
              Branding has never been more agile than it is today
              <div class="design-agency__content-description">
                A brand today is all about how it makes your customers feel.
                It's not a logo, visual identity, or digital product design. but
                rather a cohesive system that spans across all mediums and touch
                points. We're a branding agency offering a complete solution
                from naming and logo design to communications and style guides.
              </div>
              <TheButton>Discover Now</TheButton>
            </div>
            <div class="design-agency__content-image">
              <img
                :src="require('@/assets/images/about-us/img2.png')"
                alt="image-2"
              />
            </div>
          </div>
          <div v-else class="design-agency__content-item">
            <div class="design-agency__content-title">
              We are a digital product and user experience design agency
              <div class="design-agency__content-description">
                A brand today is all about how it makes your customers feel.
                It's not a logo, visual identity, or digital product design. but
                rather a cohesive system that spans across all mediums and touch
                points. We're a branding agency offering a complete solution
                from naming and logo design to communications and style guides.
              </div>
              <TheButton>Contact Us</TheButton>
            </div>
            <div class="design-agency__content-image">
              <img
                :src="require('@/assets/images/about-us/img3.png')"
                alt="image-2"
              />
            </div>
          </div>
        </div>
        <div class="design-agency__tab">
          <div
            class="design-agency__tab-item"
            v-for="item in tabs"
            :key="item"
            @click="changeTab(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "DesignAgency",
  components: {
    TheButton,
  },
  data() {
    return {
      tabs: [1, 2, 3],
      currentTab: 1,
    };
  },
  methods: {
    changeTab(tab: number) {
      this.currentTab = tab;
    },
  },
});
</script>

<style lang="scss" scoped>
.design-agency {
  padding: 120px 0;
  background-color: $background-light-alt;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 50px;
  }

  &__content {
    &-item {
      @include flexBox();
      gap: 130px;
    }

    &-title {
      @include headline2();
      color: $text-heading;
      max-width: 470px;
    }

    &-description {
      @include paragraph1();
      margin: 50px 0 70px;
      color: $text-normal;
      max-width: 470px;
    }

    &-image {
      width: 100%;
      height: 100%;
      max-width: 570px;
      max-height: 570px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__tab {
    @include flexBox();
    gap: 30px;

    &-item {
      @include linkLarge();
      @include flexBox();
      width: 50px;
      height: 50px;
      color: $text-white;
      background-color: $action-purple;
      border-radius: 50%;
      border: 1px solid $border-grey;
      transition: all 0.3s ease-in;

      &:hover {
        box-shadow: 0px 20px 50px rgba(79, 119, 255, 0.2);
        border-color: $background-white;
      }
    }
  }
}
</style>
