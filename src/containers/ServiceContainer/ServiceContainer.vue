<template>
  <DefaultLayout>
    <Breadcrumbs titleOne="services" />
    <TopService />
    <NewApp />
    <ServiceFeature />
    <DigitalBrand />
    <ClientReview />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import TopService from "./elements/TopService.vue";
import NewApp from "./elements/NewApp.vue";
import ServiceFeature from "./elements/ServiceFeature.vue";
import DigitalBrand from "@/components/common/DigitalBrand.vue";
import ClientReview from "@/components/common/ClientReview.vue";

export default Vue.extend({
  name: "ContactUsContainer",
  components: {
    DefaultLayout,
    Breadcrumbs,
    TopService,
    DigitalBrand,
    ClientReview,
    NewApp,
    ServiceFeature,
  },
});
</script>
