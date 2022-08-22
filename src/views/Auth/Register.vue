<template>
  <AuthLayout>
    <div class="the-login">
      <h2>{{ $t("login") }}</h2>
      <v-form @submit.prevent="" v-model="isValid">
        <label for="email">Email:</label>
        <v-text-field
          dense
          outlined
          rounded
          id="email"
          height="40"
          prepend-inner-icon="mdi-account"
          name=""
          hint="At least 8 characters"
          label="Email"
          placeholder="Email"
          v-model="email"
          :rules="[rules.required, rules.email]"
        >
        </v-text-field>
        <label for="password">Password:</label>
        <v-text-field
          rounded
          dense
          outlined
          id="password"
          prepend-inner-icon="mdi-key"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Normal with hint text"
          hint="At least 8 characters"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-checkbox v-model="checkbox" label="Oke nè"></v-checkbox>
        <v-btn type="submit" :disabled="!isDisable">
          {{ $t("login") }}
        </v-btn>
      </v-form>
      <div class="the-login__footer">
        <router-link to="/forgot-password">{{
          $t("forgot_username_password")
        }}</router-link>
        <router-link to="/register">{{ $t("create_new_account") }}</router-link>
      </div>
    </div>
  </AuthLayout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default Vue.extend({
  name: "Register",
  components: {
    AuthLayout,
  },
  data() {
    return {
      password: "",
      email: "",
      checkbox: false,
      show1: false,
      isValid: false,
      rules: {
        required: (value: string) => !!value || "Required.",
        min: (v: string) => v.length >= 8 || "Min 8 characters",
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
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
