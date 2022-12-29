<template>
  <div class="about-feature">
    <div
      class="about-feature__item"
      v-for="item in listFeatures"
      :key="item.id"
      :style="getIsReverse(item.isReverse)"
    >
      <div class="about-feature__img">
        <img :src="item.image" :alt="item.title" />
      </div>
      <div class="about-feature__content">
        <div class="about-feature__status">
          {{ `Features #${item.id}` }}
        </div>
        <div class="about-feature__content-title">
          {{ item.title }}
        </div>
        <div class="about-feature__content-subtitle">
          {{ item.subtitle }}
        </div>
        <div class="about-feature__content-action">
          <v-btn outlined plain large> Get In Touch </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutFeature",
  data() {
    return {
      listFeatures: [
        {
          id: "1",
          title: "Solutions that work together",
          subtitle:
            "Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.",
          image: require("@/assets/images/about-us/about-02.png"),
          isReverse: false,
        },
        {
          id: "2",
          title: "Solutions that work together",
          subtitle:
            "Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.",
          image: require("@/assets/images/about-us/about-03.png"),
          isReverse: true,
        },
      ],
    };
  },
  methods: {
    getIsReverse(status: boolean): string {
      return status ? "flex-direction: row-reverse" : "";
    },
  },
});
</script>

<style lang="scss">
.about-feature {
  padding: 20px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    &:not(:first-of-type) {
      margin-top: 30px;
    }
  }

  &__img {
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  &__status {
    font-size: 14px;
    margin-bottom: 5px;
    color: #777;
  }

  &__content {
    flex-grow: 1;
    padding: 30px;

    &-title {
      color: #292930;
      font-size: 40px;
      margin-bottom: 24px;
      font-weight: 600;
      line-height: 1.2;
    }

    &-subtitle {
      margin-bottom: 34px;
      color: #777;
      font-size: 14px;
    }
  }
}
</style>
