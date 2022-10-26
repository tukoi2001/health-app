<template>
  <DefaultLayout>
    <TopAccountSetting />
    <MainAccountSetting />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TopAccountSetting from "./elements/TopAccountSetting.vue";
import MainAccountSetting from "./elements/MainAccountSetting.vue";

export default Vue.extend({
  name: "AccountSetting",
  components: {
    DefaultLayout,
    TopAccountSetting,
    MainAccountSetting,
  },
});
</script>
