<template>
  <div class="service">
    <v-row>
      <v-col cols="3" v-for="service in services" :key="service.id">
        <div class="service__item">
          <v-icon color="#103178" size="40">{{ service.icon }}</v-icon>
          <div class="service__content">
            <div class="service__content-title">{{ service.title }}</div>
            <div class="service__content-subtitle">{{ service.subtitle }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PHONE_NUMBER } from "@/configs/constant";

export default Vue.extend({
  name: "TheService",
  data() {
    return {
      services: [
        {
          id: "1",
          title: this.$t("title_free_shipping"),
          subtitle: this.$t("subtitle_free_shipping"),
          icon: "mdi-truck-cargo-container",
        },
        {
          id: "2",
          title: this.$t("title_refund"),
          subtitle: this.$t("subtitle_refund"),
          icon: "mdi-cash-multiple",
        },
        {
          id: "3",
          title: this.$t("title_payment_everywhere"),
          subtitle: this.$t("subtitle_payment_everywhere"),
          icon: "mdi-bank-transfer",
        },
        {
          id: "4",
          title: this.$t("title_customer_contact"),
          subtitle: this.$t("subtitle_customer_contact", {
            phone: PHONE_NUMBER,
          }),
          icon: "mdi-card-account-phone",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.service {
  margin-top: 25px;

  &__item {
    display: flex;
    align-items: center;
    border: 1px solid #103178;
    padding: 15px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__content {
    margin-left: 10px;

    &-title {
      font-size: 16px;
      font-weight: 600;
      color: #103178;
      line-height: 21px;
      margin-bottom: 12px;
    }

    &-subtitle {
      font-size: 13px;
      font-weight: 500;
      color: #103178;
      line-height: 19px;
    }
  }
}
</style>
