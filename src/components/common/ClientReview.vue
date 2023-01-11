<template>
  <div class="client-review">
    <v-container>
      <div class="client-review__wrapper">
        <div class="client-review__title">
          What our clients are saying about us
          <div class="client-review__description">
            Customer satisfaction is a primary goal for our company
          </div>
        </div>
        <div class="client-review__card">
          <div
            class="client-review__card-item"
            v-for="item in clients"
            :key="item.id"
          >
            <div class="client-review__card-image">
              <img :src="item.image" :alt="item.clientName" />
            </div>
            <div class="client-review__card-title">
              {{ item.clientName }}
            </div>
            <div class="client-review__card-subtitle">
              {{ item.clientWork }}
            </div>
            <div class="client-review__card-star">
              <StartIcon v-for="item in Array(5)" :key="item" />
            </div>
            <div class="client-review__card-description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StartIcon from "../ui/StartIcon.vue";

export default Vue.extend({
  name: "ClientReview",
  components: {
    StartIcon,
  },
  data() {
    return {
      clients: [
        {
          id: 1,
          image: require("@/assets/images/about-us/Avatar1.png"),
          clientName: "Monica Smith",
          clientWork: "Web Designer",
          description:
            "Overall experience is awesome!! I'm a visual thinker, and I couldn't function without a tool like this.",
        },
        {
          id: 2,
          image: require("@/assets/images/about-us/Avatar2.png"),
          clientName: "Vincent Smith",
          clientWork: "Web Designer",
          description:
            "Overall experience is awesome!! I'm a visual thinker, and I couldn't function without a tool like this.",
        },
        {
          id: 3,
          image: require("@/assets/images/about-us/Avatar3.png"),
          clientName: "Stella Smith",
          clientWork: "Web Designer",
          description:
            "Overall experience is awesome!! I'm a visual thinker, and I couldn't function without a tool like this.",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.client-review {
  padding: 120px 0;
  background-color: $background-light;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 80px;
  }

  &__title {
    @include display3();
    color: $text-heading;
    text-align: center;
  }

  &__description {
    @include headline3();
    color: $text-normal;
    margin-top: 30px;
  }

  &__card {
    @include flexBox();
    gap: 30px;

    &-item {
      @include flexBox();
      flex-direction: column;
      background-color: $background-white;
      box-shadow: 0px 20px 50px rgba(79, 119, 255, 0.2);
      border-radius: 20px;
      padding: 35px 35px 45px;
    }

    &-image {
      width: 70px;
      height: 70px;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-title {
      @include headline3();
      color: $text-heading;
      margin: 10px 0 5px;
    }

    &-subtitle {
      @include paragraph2();
      color: $text-normal;
    }

    &-star {
      @include flexBox();
      gap: 5px;
      margin: 20px 0 30px;
    }

    &-description {
      @include paragraph1();
      color: $text-normal;
      text-align: center;
    }
  }
}
</style>
