<template>
  <DefaultLayout
    ><Breadcrumbs :titleOne="$t('about_us')" />
    <BestExperience />
    <DesignAgency />
    <AboutValue />
    <ClientReview />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import BestExperience from "./elements/BestExperience.vue";
import DesignAgency from "./elements/DesignAgency.vue";
import AboutValue from "./elements/AboutValue.vue";
import ClientReview from "@/components/common/ClientReview.vue";

export default Vue.extend({
  name: "HomeContainer",
  components: {
    DefaultLayout,
    Breadcrumbs,
    BestExperience,
    DesignAgency,
    AboutValue,
    ClientReview,
  },
});
</script>
