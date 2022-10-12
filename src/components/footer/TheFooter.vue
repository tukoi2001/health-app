<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="2" sm="2" md="2" lg="2" class="pa-0">
        <div class="footer__left">
          <div class="my-4">
            <v-img
              :src="require('@/assets/images/logo/logo.png')"
              contain
              alt="logo"
              height="36"
            />
          </div>
          <p class="ma-0 footer__left-title">
            {{ $t("my_address") }}
          </p>
          <div class="text-center my-3">
            <a class="px-3 footer__left-icon" href=""
              ><v-icon color="#103178" size="30">mdi-facebook</v-icon></a
            >
            <a class="px-3 footer__left-icon" href=""
              ><v-icon color="#103178" size="30"
                >mdi-facebook-messenger</v-icon
              ></a
            >
            <a class="px-3 footer__left-icon" href=""
              ><v-icon color="#103178" size="30">mdi-email-outline</v-icon></a
            >
          </div>
        </div>
      </v-col>
      <v-col cols="3" sm="3" md="3" lg="3" class="pa-0">
        <div class="footer__middle px-4">
          <h4 class="ma-0 footer__middle-title pt-2">
            {{ $t("need_help") }}
          </h4>
          <div class="footer__middle-contact py-4">
            <h4 class="footer__middle-contact-title">
              <v-icon size="36" color="#fd8d27" class="mr-3">mdi-phone</v-icon
              >{{ phoneNumber }}
            </h4>
            <div class="pt-3">
              <p class="ma-0 footer__middle-contact-subtitle">
                {{ $t("monday_friday") }}
              </p>
              <p class="ma-0 footer__middle-contact-subtitle">
                {{ $t("saturday") }}
              </p>
            </div>
          </div>
          <div class="py-4">
            <a
              class="footer__middle-contact-email"
              :href="`mailto:${defaultEmail}`"
              ><v-icon size="23px" class="mr-2" color="#103178"
                >mdi-email-outline</v-icon
              >{{ defaultEmail }}</a
            >
          </div>
        </div>
      </v-col>
      <v-col cols="3" sm="3" md="3" lg="3" class="pa-0">
        <div class="footer__right mb-4">
          <p class="footer__right-des mb-4">
            {{ $t("please_come_with_us") }}
          </p>
          <div class="footer__right-box">
            <h4 class="footer__right-box-title mb-2">{{ $t("policy") }}</h4>
            <ul class="footer__right-box-list pa-0">
              <li class="mb-2">
                <router-link class="footer__right-box-link" to="/">{{
                  $t("terms_and_conditions")
                }}</router-link>
              </li>
              <li class="mb-2">
                <router-link class="footer__right-box-link" to="/">{{
                  $t("payment_method")
                }}</router-link>
              </li>
              <li class="mb-2">
                <router-link class="footer__right-box-link" to="/">{{
                  $t("product_warranty")
                }}</router-link>
              </li>
              <li class="mb-2">
                <router-link class="footer__right-box-link" to="/">{{
                  $t("return_process")
                }}</router-link>
              </li>
              <li>
                <router-link class="footer__right-box-link" to="/">{{
                  $t("payment_security")
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4">
        <div class="footer__register text-left pl-10">
          <h4 class="ma-0 footer__middle-title">
            {{ $t("sign_up_to_receive_information") }}
          </h4>
          <div class="my-6">
            <template>
              <v-text-field
                dense
                outlined
                rounded
                id="email"
                height="40"
                prepend-inner-icon="mdi-email-outline"
                name="email"
                :label="$t('email')"
                placeholder="abc@demo.com"
                v-model="email"
                :rules="[rules.email]"
              />
            </template>
            <v-btn
              type="submit"
              rounded
              width="100%"
              class="footer__register-button"
              color="#fd8d27"
            >
              {{ $t("submit") }}
            </v-btn>
          </div>
          <p class="footer__right-des">
            {{ $t("receive_new_and_free_content") }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="footer__bottom">
      <v-col cols="6" sm="6" md="6" lg="6" class="pa-0">
        <div class="footer__bottom-title">
          {{ $t("copyright") }}
        </div>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6" class="pa-0">
        <v-img
          :src="require('@/assets/images/footer/payment.png')"
          contain
          alt="logo"
          height="40"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { PHONE_NUMBER, DEFAULT_EMAIL } from "@/configs/constant";
export default Vue.extend({
  name: "TheFooter",
  data() {
    return {
      email: "",
      phoneNumber: PHONE_NUMBER,
      defaultEmail: DEFAULT_EMAIL,
      rules: {
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
.footer {
  &__left {
    border-right: 2px solid #f0f2f5;

    &-title {
      line-height: 26px;
      text-align: left;
      font-size: 14px;
      font-weight: 400;
      color: #5b6c8f;
      text-align: center;
    }

    &-icon {
      text-decoration: none;
    }
  }

  &__middle {
    &-title {
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      color: #103178;
    }

    &-contact {
      border-bottom: 2px solid #f0f2f5;

      &-title {
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        color: #103178;
      }

      &-subtitle {
        font-size: 14px;
        color: #5b6c8f;
      }

      &-email {
        text-decoration: none;
        font-weight: 700;
        color: #103178;
        font-size: 16px;
        line-height: 23px;
      }
    }
  }

  &__right {
    &-des {
      font-size: 14px;
      font-weight: 500;
      color: #103178;
      line-height: 19px;
    }

    &-box {
      &-title {
        font-weight: 700;
        color: #103178;
        font-size: 16px;
        line-height: 23px;
      }

      &-link {
        font-size: 13px;
        text-decoration: none;
        font-weight: 500;
        color: #103178;
        line-height: 19px;
      }
    }
  }

  &__bottom {
    padding: 20px 0;
    border-top: 2px solid #f0f2f5;

    &-title {
      font-size: 13px;
      font-weight: 500;
      color: #103178;
      line-height: 40px;
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

  .footer__register-button {
    .v-btn__content {
      color: #fff;
      font-size: 17px;
      font-weight: 600;
    }
  }

  .v-text-field__details {
    margin-bottom: 5px !important;

    .v-messages__message {
      font-weight: 600;
    }
  }
  .v-label {
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
  }
}
</style>
