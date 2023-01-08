<template>
  <div class="footer">
    <v-container>
      <div class="footer__top">
        <div class="footer__top-logo">
          <img :src="require('@/assets/images/logo/logo.png')" alt="logo" />
        </div>
        <div class="footer__top-content">
          <div class="content__title">Company</div>
          <div
            v-for="(item, index) in company"
            :key="index"
            class="content__subtitle"
          >
            {{ item }}
          </div>
        </div>
        <div class="footer__top-content">
          <div class="content__title">Services</div>
          <div
            v-for="(item, index) in services"
            :key="index"
            class="content__subtitle"
          >
            {{ item }}
          </div>
        </div>
        <div class="footer__top-content">
          <div class="content__title">Contact</div>
          <div
            v-for="(item, index) in contact"
            :key="index"
            class="content__subtitle"
          >
            {{ item }}
          </div>
        </div>
        <div class="footer__top-subscribe">
          <div class="content__title">Newsletter</div>
          <div class="content__des">
            Subscribe to our newsletter to keep up to date on our marketing,
            website, design services, and tips.
          </div>
          <div class="content__form">
            <v-text-field
              v-model="email"
              placeholder="Enter email"
              background-color="#E7E5EA"
              outlined
              clearable
            />
            <TheButton :size="'large'">Submit</TheButton>
          </div>
          <div class="content__sub-des">
            We hate spam as much as you do. We will never, ever send you such
            emails.
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-title">
          © 2022 Pollock LLC. All Rights Reserved. Terms & Conditions. Privacy
          Policy.
        </div>
        <div class="footer__bottom-actions">
          <TheButton fab :size="'large'"><FacebookIcon /></TheButton>
          <TheButton fab :size="'large'"><TwitterIcon /></TheButton>
          <TheButton fab :size="'large'"><LinkedInIcon /></TheButton>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";
import FacebookIcon from "@/components/ui/FacebookIcon.vue";
import TwitterIcon from "@/components/ui/TwitterIcon.vue";
import LinkedInIcon from "@/components/ui/LinkedInIcon.vue";

export default Vue.extend({
  name: "TheFooter",
  components: {
    TheButton,
    FacebookIcon,
    TwitterIcon,
    LinkedInIcon,
  },
  data() {
    return {
      email: "",
      company: ["About", "Work", "Careers", "Pricing", "Blog"],
      services: [
        "Branding",
        "Websites",
        "Development",
        "Strategy",
        "Platforms",
      ],
      contact: ["Help Desk", "Docs", "Open a Ticket", "Chat", "Forum"],
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  padding: 105px 0 30px;
  background-color: $background-grey;

  &__top {
    @include flexBox(center, flex-start);
    gap: 30px;
    padding-bottom: 120px;

    &-logo {
      width: calc(15% - 24px);
      cursor: pointer;
    }

    &-content {
      width: calc(15% - 24px);
    }

    &-subscribe {
      width: calc(40% - 24px);
      flex-grow: 1;
    }

    .content {
      &__title {
        @include headline3();
        color: $text-white;
        padding-bottom: 20px;
      }

      &__subtitle {
        @include linkSmall();
        color: $text-grey;
        transition: all 0.3s ease-in-out;

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }

        &:hover {
          transform: scale(1.02);
        }
      }

      &__des {
        @include paragraph2();
        color: $text-grey;
      }

      &__form {
        @include flexBox(center, flex-start);
        gap: 6px;
        padding: 25px 0 0;
      }

      &__sub-des {
        @include paragraph3();
        color: $text-grey;
      }
    }
  }

  &__bottom {
    @include flexBox(space-between);
    border-top: 1px solid $text-normal;
    padding-top: 30px;

    &-title {
      @include paragraph2();
      color: $text-grey;
    }

    &-actions {
      @include flexBox(flex-end);
      gap: 20px;
    }
  }
}
</style>
