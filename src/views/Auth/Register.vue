<template>
  <AuthLayout>
    <div class="the-login">
      <h2 class="the-login__title">{{ $t("register") }}</h2>
      <v-form @submit.prevent="" v-model="isValid">
        <template>
          <label class="the-login__label" for="fullName">{{
            $t("full_name")
          }}</label>
          <v-text-field
            dense
            outlined
            rounded
            id="fullName"
            height="40"
            prepend-inner-icon="mdi-account-outline"
            name="fullName"
            :label="$t('full_name')"
            placeholder="David Backer"
            v-model="email"
            :rules="[rules.required]"
          />
        </template>
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
        <template>
          <label class="the-login__label" for="password">{{
            $t("password")
          }}</label>
          <v-text-field
            rounded
            dense
            outlined
            id="password"
            prepend-inner-icon="mdi-lock-outline"
            v-model="password"
            :rules="[rules.required, rules.min]"
            type="password"
            name="password"
            :label="$t('password')"
            :placeholder="$t('password')"
            :hint="$t('least_characters')"
          />
        </template>
        <template>
          <label class="the-login__label" for="repeatPassword">{{
            $t("repeat_password")
          }}</label>
          <v-text-field
            rounded
            dense
            outlined
            id="repeatPassword"
            prepend-inner-icon="mdi-lock-outline"
            v-model="repeatPassword"
            :rules="[rules.repeatPassword, rules.required]"
            type="password"
            name="repeatPassword"
            :label="$t('repeat_password')"
            :placeholder="$t('repeat_password')"
            :hint="$t('password_must_identical')"
          />
        </template>
        <v-checkbox
          class="ma-0 pa-0"
          :rules="[rules.checkBox]"
          v-model="checkbox"
          :label="$t('agree_all_terms_and_conditions')"
          success
          dense
        ></v-checkbox>
        <v-btn
          type="submit"
          :disabled="!isDisable"
          rounded
          width="100%"
          class="the-login__button mt-2"
          color="#103178"
        >
          {{ $t("register") }}
        </v-btn>
      </v-form>
      <div class="the-register__footer">
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
  name: "TheRegister",
  components: {
    AuthLayout,
  },
  data() {
    return {
      password: "",
      repeatPassword: "",
      email: "",
      checkbox: false,
      isValid: false,
      rules: {
        required: (value: string) => !!value || this.$t("required"),
        min: (v: string) => v.length >= 8 || this.$t("least_characters"),
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t("invalid_email");
        },
        repeatPassword: (v: string) =>
          v === this.password || this.$t("repeat_password_not_match"),
        checkBox: (value: boolean) =>
          value || this.$t("must_accept_terms_and_conditions"),
      },
    };
  },
  computed: {
    isDisable(): boolean {
      return this.checkbox && this.isValid;
    },
  },
});
</script>

<style lang="scss" scoped src="@/styles/auth/style.scss"></style>
