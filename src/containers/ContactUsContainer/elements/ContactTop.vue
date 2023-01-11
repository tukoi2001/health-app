<template>
  <div class="contact-top">
    <v-container>
      <div class="contact-top__wrapper">
        <div class="contact-top__title">
          Get in touch and let us know how we can help.
          <div class="contact-top__description">
            If you are here looking for assistance, please select the category
            that best fits your concern
          </div>
        </div>
        <div class="contact-top__content">
          <div
            v-for="item in items"
            :key="item.id"
            class="contact-top__content-item"
          >
            <div class="contact-top__content-title">{{ item.title }}</div>
            <div class="contact-top__content-description">
              {{ item.description }}
            </div>
            <div class="contact-top__content-link">{{ item.link }}</div>
          </div>
        </div>
        <TheButton :size="'large'">Open a Ticket</TheButton>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "ContactTop",
  components: {
    TheButton,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Contact Us",
          description: "1000 S Eighth Ave, NYC 0019 1 (646) 652-0000",
          link: "Our Locations",
        },
        {
          id: 2,
          title: "Help & Support",
          description: "We'd love to talk about how we can work together.",
          link: "Contact Sales",
        },
        {
          id: 3,
          title: "Media & Press",
          description: "Get Pollock news, company info, and media resources.",
          link: "Visit newsroom ",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.contact-top {
  padding: 120px 0;
  background-color: $background-light;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 90px;
    text-align: center;
  }

  &__title {
    @include display2();
    max-width: 870px;
    color: $text-heading;
  }

  &__description {
    @include paragraph1();
    margin-top: 30px;
    color: $text-normal;
  }

  &__content {
    @include flexBox();
    gap: 30px;

    &-item {
      width: calc(100% / 3 - 20px);
      padding: 55px 35px 65px;
      background: $background-white;
      box-shadow: 0px 20px 50px rgba(79, 119, 255, 0.2);
      border-radius: 20px;
    }

    &-title {
      @include headline3();
      color: $text-primary;
    }

    &-description {
      @include paragraph1();
      margin: 35px 0 50px;
      color: $text-normal;
    }

    &-link {
      @include linkLarge();
      color: $action-blue;
    }
  }
}
</style>
