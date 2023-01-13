<template>
  <div class="top-service">
    <v-container>
      <div class="top-service__wrapper">
        <div class="top-service__title">
          An outstanding strategy, design, and development across all platforms
          <div class="top-service__description">
            Share ideas, make decisions and move work forward with a common
            purpose and place
          </div>
        </div>
        <div class="top-service__card">
          <div class="top-service__left">
            <div
              v-for="item in leftItems"
              :key="item.id"
              class="top-service__item"
            >
              <component :is="item.icon" />
              <div class="top-service__item-title">{{ item.title }}</div>
              <div class="top-service__item-description">
                {{ item.description }}
              </div>
            </div>
          </div>
          <div class="top-service__middle">
            <div
              v-for="item in middleItems"
              :key="item.id"
              class="top-service__item"
            >
              <component :is="item.icon" />
              <div class="top-service__item-title">{{ item.title }}</div>
              <div class="top-service__item-description">
                {{ item.description }}
              </div>
            </div>
          </div>
          <div class="top-service__right">
            <div class="top-service__right-title">
              We fuel the growth of purpose driven brands through strategy
              design empowerment, and market adoption.
            </div>
            <div class="top-service__right-description">
              With enterprise-ready security and administration controls, deploy
              Pollock company - wide with ease.
            </div>
            <TheButton>Get Started</TheButton>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";
import LightNing from "@/components/ui/LightNing.vue";
import RocketIcon from "@/components/ui/RocketIcon.vue";
import ChartIcon from "@/components/ui/ChartIcon.vue";
import StackIcon from "@/components/ui/StackIcon.vue";

export default Vue.extend({
  name: "TopService",
  components: {
    TheButton,
    LightNing,
    RocketIcon,
    ChartIcon,
    StackIcon,
  },
  data() {
    return {
      leftItems: [
        {
          id: 1,
          icon: "RocketIcon",
          title: "Startups",
          description:
            "From cultivating new ideas to connecting the dots for customers or users.",
        },
        {
          id: 2,
          icon: "ChartIcon",
          title: "Analytics",
          description:
            "From cultivating new ideas to connecting the dots for customers or users.",
        },
      ],
      middleItems: [
        {
          id: 1,
          icon: "StackIcon",
          title: "Development",
          description:
            "From cultivating new ideas to connecting the dots for customers or users.",
        },
        {
          id: 2,
          icon: "LightNing",
          title: "Workflow",
          description:
            "From cultivating new ideas to connecting the dots for customers or users.",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.top-service {
  padding: 120px 0;
  background-color: $background-white;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 100px;
    text-align: center;
  }

  &__title {
    @include display3();
    max-width: 970px;
    color: $text-heading;
  }

  &__description {
    @include paragraph1();
    color: $text-normal;
    margin-top: 30px;
  }

  &__card {
    @include flexBox();
    gap: 30px;
  }

  &__item {
    width: 100%;
    height: 100%;
    max-width: 270px;
    max-height: 270px;
    padding: 30px;
    border: 1px solid rgba(97, 119, 152, 0.2);
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 20px 50px rgba(79, 119, 255, 0.2);
      border-color: transparent;
    }

    &-title {
      @include headline3();
      color: $text-primary;
      margin: 10px 0 20px;
    }

    &-description {
      @include paragraph2();
      color: $text-normal;
    }
  }

  &__left {
    @include flexBox();
    flex-direction: column;
    gap: 30px;
  }

  &__middle {
    @include flexBox();
    flex-direction: column;
    gap: 30px;
    margin-top: 100px;
  }

  &__right {
    @include flexBox(flex-start, flex-start);
    flex-direction: column;
    max-width: 470px;
    margin-left: 100px;
    text-align: left;

    &-title {
      @include headline2();
      color: $text-heading;
    }

    &-description {
      @include paragraph1();
      color: $text-normal;
      margin: 30px 0 70px;
    }
  }
}
</style>
