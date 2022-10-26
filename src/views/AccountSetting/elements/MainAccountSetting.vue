<template>
  <div class="main-account-setting">
    <div class="main-account-setting__left">
      <LeftHandSide
        :tabs="tabs"
        :currentTab="currentTab"
        @changeTab="changeTab"
      />
    </div>
    <div class="main-account-setting__right">
      <RightHandSide :currentTab="currentTab" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LeftHandSide from "./LeftHandSide.vue";
import RightHandSide from "./RightHandSide.vue";

export default Vue.extend({
  name: "MainAccountSetting",
  components: { LeftHandSide, RightHandSide },
  data() {
    return {
      tabs: [
        {
          id: 1,
          icon: "mdi-account",
          title: this.$t("account_details"),
          tab: "AccountDetails",
        },
        {
          id: 2,
          icon: "mdi-map-marker",
          title: this.$t("update_address"),
          tab: "UpdateAddress",
        },
        {
          id: 3,
          icon: "mdi-cart",
          title: this.$t("order_history"),
          tab: "OrderHistory",
        },
        {
          id: 4,
          icon: "mdi-key",
          title: this.$t("change_password"),
          tab: "ChangePassword",
        },
      ],
      currentTab: "AccountDetails",
    };
  },
  methods: {
    changeTab(tab: string) {
      this.currentTab = tab;
    },
  },
});
</script>

<style lang="scss" scoped>
.main-account-setting {
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 1px solid #f0f2f5;

  &__left {
    width: 250px;
    height: 100%;
  }

  &__right {
    width: calc(100% - 250px);
    height: 100%;
    padding-left: 30px;
    margin-top: 45px;
  }
}
</style>
