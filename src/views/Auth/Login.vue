<template>
  <AuthLayout>
    <div class="the-login">
      <h2 class="the-login__title">{{ $t("login") }}</h2>
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
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="password"
            :label="$t('password')"
            :placeholder="$t('password')"
            :hint="$t('least_characters')"
            @click:append="show1 = !show1"
          />
        </template>
        <div class="the-login__forgot">
          <router-link to="/forgot-password" class="the-login__forgot-link">{{
            $t("forgot_username_password")
          }}</router-link>
        </div>
        <v-btn
          type="submit"
          :disabled="!isDisable"
          rounded
          width="100%"
          class="the-login__button"
          color="#103178"
        >
          {{ $t("login") }}
        </v-btn>
      </v-form>
      <div class="the-login__footer">
        <router-link class="the-login__footer-link" to="/register">{{
          $t("create_new_account")
        }}</router-link>
      </div>
    </div>
  </AuthLayout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default Vue.extend({
  name: "TheLogin",
  components: {
    AuthLayout,
  },
  data() {
    return {
      password: "",
      email: "",
      show1: false,
      isValid: false,
      rules: {
        required: (value: string) => !!value || this.$t("required"),
        min: (v: string) => v.length >= 8 || this.$t("least_characters"),
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
