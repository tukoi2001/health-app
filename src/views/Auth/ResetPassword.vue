<template>
  <AuthLayout>
    <div class="the-login">
      <h2 class="the-login__title mb-4">{{ $t("forget_password") }}</h2>
      <v-form @submit.prevent="" v-model="isValid">
        <template>
          <label class="the-login__label" for="email">{{ $t("email") }}</label>
          <v-text-field
            dense
            outlined
            rounded
            id="email"
            height="40"
            prepend-inner-icon="mdi-account-outline"
            name="email"
            :label="$t('email')"
            placeholder="abc@demo.com"
            v-model="email"
            :rules="[rules.required, rules.email]"
          />
        </template>
        <v-btn
          type="submit"
          :disabled="!isDisable"
          rounded
          width="100%"
          class="the-login__button"
          color="#103178"
        >
          {{ $t("submit") }}
        </v-btn>
      </v-form>
      <div class="the-login__footer mb-10 mt-15">
        <router-link class="the-login__footer-link" to="/login">{{
          $t("already_have_account")
        }}</router-link>
      </div>
    </div>
  </AuthLayout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default Vue.extend({
  name: "ResetPassword",
  components: {
    AuthLayout,
  },
  data() {
    return {
      email: "",
      isValid: false,
      rules: {
        required: (value: string) => !!value || this.$t("required"),
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t("invalid_email");
        },
      },
    };
  },
  computed: {
    isDisable(): boolean {
      return this.isValid;
    },
  },
});
</script>

<style lang="scss" scoped src="@/styles/auth/style.scss"></style>
