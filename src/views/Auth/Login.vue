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
      return this.isValid;
    },
  },
});
</script>

<style lang="scss" scoped>
.the-login {
  position: relative;

  &__title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    color: #103178;
  }

  &__label {
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 5px;
    display: block;
  }

  &__forgot {
    &-link {
      text-decoration: none;
      font-size: 12px;
      text-align: right;
      display: block;
      color: #333;
      margin-bottom: 18px;
      transition: all 0.3s ease-in-out;
      font-weight: 500;

      &:hover {
        color: #103178;
      }
    }
  }

  &__footer {
    margin-top: 120px;

    &-link {
      text-decoration: none;
      font-size: 14px;
      text-align: center;
      display: block;
      color: #333;
      transition: all 0.3s ease-in-out;
      font-weight: 600;

      &:hover {
        color: #103178;
      }
    }
  }
}

::v-deep {
  .v-text-field__slot {
    label {
      font-size: 14px;
    }

    input {
      font-size: 14px;
      font-weight: 600;
    }
  }

  .the-login__button {
    .v-btn__content {
      color: #fff;
      font-size: 17px;
      font-weight: 600;
    }
  }

  .v-text-field__details {
    margin-bottom: 3px !important;

    .v-messages__message {
      font-weight: 600;
    }
  }
}
</style>
