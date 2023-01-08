<template>
  <v-container>
    <div class="digital-service">
      <div class="digital-service__top">
        <div class="digital-service__top-title">
          We design engaging digital products used by millions of people
          <div class="digital-service__top-subtitle">
            We team up with marketing departments of large companies and
            startups to deliver award winning websites
          </div>
        </div>
        <div class="digital-service__top-card">
          <div class="card-item" v-for="item in services" :key="item.id">
            <component :is="item.component" />
            <div class="card-item__title">{{ item.title }}</div>
            <div class="card-item__description">{{ item.description }}</div>
          </div>
        </div>
        <TheButton> View Our Services </TheButton>
      </div>
      <div class="digital-service__bottom">
        <div class="digital-service__bottom-title">
          Working with the most trusted brands in the industry
        </div>
        <div class="digital-service__bottom-brand">
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
import RocketIcon from "@/components/ui/RocketIcon.vue";
import StackIcon from "@/components/ui/StackIcon.vue";
import ChartIcon from "@/components/ui/ChartIcon.vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "DigitalService",
  components: { RocketIcon, StackIcon, ChartIcon, TheButton },
  data() {
    return {
      services: [
        {
          id: 1,
          component: "RocketIcon",
          title: "Branding",
          description:
            "We design digital platforms to empower users and your brand's tribe.",
        },
        {
          id: 2,
          component: "StackIcon",
          title: "Development",
          description:
            "We design digital platforms to empower users and your brand's tribe.",
        },
        {
          id: 3,
          component: "ChartIcon",
          title: "Strategy",
          description:
            "We design digital platforms to empower users and your brand's tribe.",
        },
      ],
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
  methods: {},
});
</script>

<style lang="scss">
.digital-service {
  padding: 120px 20px;
  background-color: $background-white;

  &__top {
    @include flexBox();
    flex-direction: column;

    &-title {
      @include display2();
      text-align: center;
      color: $text-heading;
    }

    &-subtitle {
      @include paragraph1();
      margin-top: 30px;
      color: $text-normal;
    }

    &-card {
      @include flexBox();
      gap: 45px;
      padding: 80px 100px 70px;

      .card-item {
        @include flexBox();
        flex-direction: column;
        gap: 25px;
        padding: 60px 40px;
        background-color: $background-white;
        border: 1px solid $border-hr-line;
        border-radius: 20px;
        transition: all 0.3s ease-in-out;

        &__title {
          @include headline3();
          color: $text-primary;
        }

        &__description {
          @include paragraph2();
          color: $text-normal;
          text-align: center;
        }

        &:hover {
          box-shadow: 0px 20px 50px $blue-shadow;
          border-color: transparent;
        }
      }
    }
  }

  &__bottom {
    padding-top: 120px;

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

@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .digital-service__top-card {
    gap: 30px;
    padding: 80px 0 70px;

    .card-item {
      gap: 25px;
      padding: 60px 20px;
    }
  }
}
</style>
