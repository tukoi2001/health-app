<template>
  <div class="contact-form">
    <v-container>
      <div class="contact-form__wrapper">
        <div class="contact-form__title">
          An outstanding strategy, design, and development across all platforms
          <div class="contact-form__description">
            Share ideas, make decisions and move work forward with a common
            purpose and place
          </div>
        </div>
        <div class="contact-form__content">
          <div class="contact-form__content-form">
            <div class="contact-form__content-title">Write a Comment</div>
            <div class="contact-form__content-item">
              <v-text-field
                v-model="formData.name"
                id="name"
                name="name"
                label="Name*"
                :hint="$t('least_characters')"
                :placeholder="$t('password')"
                dense
                outlined
                :rules="[rules.required, rules.min]"
              />
              <v-text-field
                v-model="formData.email"
                id="email"
                name="email"
                label="Email*"
                :hint="$t('least_characters')"
                :placeholder="$t('password')"
                dense
                outlined
                :rules="[rules.required, rules.email]"
              />
            </div>
            <div class="contact-form__content-item">
              <v-text-field
                v-model="formData.name"
                id="name"
                name="password"
                label="Company"
                :hint="$t('least_characters')"
                :placeholder="$t('password')"
                dense
                outlined
              />
              <v-text-field
                v-model="formData.email"
                id="email"
                name="password"
                label="Phone"
                :placeholder="$t('password')"
                :hint="$t('least_characters')"
                dense
                outlined
              />
            </div>
            <div class="contact-form__content-comment">
              <v-textarea
                v-model="formData.comment"
                name="comment"
                label="Comment*"
                outlined
                :rules="[rules.required, rules.max]"
              />
            </div>
            <div class="contact-form__content-action">
              <TheButton>Submit</TheButton>
            </div>
          </div>
          <div class="contact-form__content-image">
            <img
              :src="require('@/assets/images/contact-us/video.png')"
              alt="form-contact"
            />
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
  name: "ContactForm",
  components: {
    TheButton,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        company: "",
        phone: "",
        comment: "",
      },
      rules: {
        required: (value: string) => !!value || this.$t("required"),
        min: (v: string) => v.length >= 8 || this.$t("least_characters"),
        max: (v: string) => v.length <= 255 || this.$t("least_characters"),
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t("invalid_email");
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.contact-form {
  padding: 120px 0;
  background-color: $background-white;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 100px;
  }

  &__title {
    @include display3();
    max-width: 970px;
    text-align: center;
    color: $text-heading;
  }

  &__description {
    @include paragraph1();
    margin-top: 30px;
    color: $text-normal;
  }

  &__content {
    @include flexBox();
    gap: 130px;

    &-title {
      @include headline4();
      color: $text-heading;
      margin-bottom: 30px;
      text-align: left;
      width: 100%;
    }

    &-form {
      @include flexBox();
      flex-direction: column;
      flex-grow: 1;
      width: 100%;
      padding: 40px 50px;
      background-color: $background-light;
      border-radius: 10px;
    }

    &-item {
      @include flexBox();
      gap: 20px;
      width: 100%;
    }

    &-comment {
      width: 100%;
    }

    &-action {
      @include flexBox(flex-end);
      width: 100%;
    }

    &-image {
      width: 100%;
      height: 100%;
      max-width: 630px;
      max-height: 450px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
