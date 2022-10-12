<template>
  <div class="the-subscribe">
    <v-img :src="require('@/assets/images/subscribe/subscribe.jpg')" />
    <div class="the-subscribe__content">
      <h3 class="the-subscribe__content-title">
        {{ $t("join_our_newsletter_and_get_discount_for_your_first_order") }}
      </h3>
      <v-row>
        <v-col cols="8">
          <v-text-field
            dense
            outlined
            rounded
            id="email"
            height="40"
            name="email"
            :placeholder="$t('enter_your_email_address')"
            v-model="email"
            :rules="[rules.email]"
          />
        </v-col>
        <v-col cols="4">
          <v-btn type="submit" rounded width="100%" color="#fd8d27">
            {{ $t("subscribe") }}
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TheSubscribe",
  data() {
    return {
      email: "",
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
.the-subscribe {
  margin: 20px 0 30px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    width: 45%;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);

    &-title {
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
}
::v-deep {
  .v-input {
    background-color: #fff;
    height: 50px;

    &__slot {
      height: 50px !important;
    }
  }

  .v-btn {
    height: 50px !important;

    &__content {
      color: #fff;
      line-height: 24px;
      font-size: 18px;
      font-weight: 500;
      text-transform: capitalize;
    }
  }
}
</style>
