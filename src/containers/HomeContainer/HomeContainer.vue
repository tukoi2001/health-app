<template>
  <DefaultLayout>
    <HomeHeader />
    <DigitalService />
    <DigitalProduct />
    <ServiceStory />
    <TheSubscription />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeHeader from "./elements/HomeHeader.vue";
import DigitalService from "./elements/DigitalService.vue";
import DigitalProduct from "./elements/DigitalProduct.vue";
import ServiceStory from "./elements/ServiceStory.vue";
import TheSubscription from "./elements/TheSubscription.vue";

export default Vue.extend({
  name: "HomeContainer",
  components: {
    DefaultLayout,
    HomeHeader,
    DigitalService,
    DigitalProduct,
    ServiceStory,
    TheSubscription,
  },
});
</script>
