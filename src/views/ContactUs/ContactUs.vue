<template>
  <DefaultLayout>
    <Breadcrumbs :titleOne="'Contact'" />
    <MainContact />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import MainContact from "./elements/MainContact.vue";

export default Vue.extend({
  name: "ContactUs",
  components: {
    DefaultLayout,
    Breadcrumbs,
    MainContact,
  },
});
</script>
