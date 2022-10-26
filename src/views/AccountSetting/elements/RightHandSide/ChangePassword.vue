<template>
  <div class="change-password">
    <div class="change-password__title">{{ $t("change_password") }}</div>
    <div class="change-password__subtitle">
      {{ $t("change_password_hint_text") }}
    </div>
    <v-form @submit.prevent="" v-model="isValid">
      <v-row class="change-password__box">
        <v-col cols="12" class="py-0">
          <div class="change-password__item">
            <template>
              <label class="change-password__item-label" for="current_password"
                >{{ $t("current_password") }}:</label
              >
              <v-text-field
                id="current_password"
                v-model="formData.currentPassword"
                :placeholder="$t('current_password')"
                :label="$t('current_password')"
                :rules="[rules.required, rules.min]"
                name="current_password"
                dense
                outlined
              />
            </template>
          </div>
        </v-col>
        <v-col cols="6" class="py-0">
          <div class="change-password__item">
            <template>
              <label class="change-password__item-label" for="new_password"
                >{{ $t("new_password") }}:</label
              >
              <v-text-field
                id="new_password"
                v-model="formData.newPassword"
                :placeholder="$t('new_password')"
                :label="$t('new_password')"
                :rules="[rules.required, rules.min]"
                name="new_password"
                dense
                outlined
              />
            </template>
          </div>
        </v-col>
        <v-col cols="6" class="py-0">
          <div class="change-password__item">
            <template>
              <label
                class="change-password__item-label"
                for="confirm_new_password"
                >{{ $t("confirm_new_password") }}:</label
              >
              <v-text-field
                id="confirm_new_password"
                v-model="formData.confirmNewPassword"
                :placeholder="$t('confirm_new_password')"
                :label="$t('confirm_new_password')"
                :rules="[rules.required, rules.repeatPassword]"
                name="confirm_new_password"
                dense
                outlined
              />
            </template>
          </div>
        </v-col>
        <div class="change-password__action">
          <v-btn
            elevation="2"
            plain
            small
            :disabled="!isValid"
            @click="handleChangePassword"
          >
            {{ $t("update") }}
          </v-btn>
        </div>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ChangePassword",
  data() {
    return {
      formData: {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      isValid: true,
      rules: {
        required: (value: string) => !!value || this.$t("required"),
        min: (v: string) => v.length >= 8 || this.$t("least_characters"),
        repeatPassword: (v: string) =>
          v === this.formData.newPassword ||
          this.$t("repeat_password_not_match"),
      },
    };
  },
  methods: {
    handleChangePassword(): void {
      //
    },
  },
});
</script>

<style lang="scss" scoped>
.change-password {
  &__title {
    font-size: 20px;
    font-weight: 700;
    color: #4b4e55;
    line-height: 29px;
    padding-bottom: 8px;
  }

  &__subtitle {
    font-size: 14px;
    font-weight: 400;
    color: #4b4e55;
    line-height: 21px;
    padding-bottom: 12px;
    border-bottom: 1px solid #d3d2d2;
  }

  &__box {
    padding: 20px 0;
  }

  &__item {
    position: relative;
    padding: 0 10px;

    &-label {
      font-size: 15px;
      font-weight: 600;
      color: #252729;
      line-height: 21px;
    }

    &--active {
      position: absolute;
      right: -10px;
      top: 35px;
    }
  }

  &__action {
    margin: 8px 0 0 22px;
  }
}

::v-deep {
  .v-text-field {
    margin-top: 8px;

    &__details {
      margin-bottom: 0 !important;
    }

    &__slot {
      .v-label {
        font-size: 14px;
        color: #383a3d;
        line-height: 21px;
      }

      input {
        font-size: 14px;
        font-weight: 600;
        color: #383a3d;
        line-height: 21px;
      }
    }
  }

  .v-btn {
    height: 32px !important;
    background-color: #fd8d27;

    &__content {
      font-size: 14px;
      color: #fff;
      font-weight: 600;
      text-transform: none;

      .v-icon {
        margin-right: 8px;
      }
    }
  }
}
</style>
