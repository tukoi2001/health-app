<template>
  <DefaultLayout>
    <Breadcrumbs :titleOne="$t('about_us')" />
    <MainAbout />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import MainAbout from "./elements/MainAbout.vue";

export default Vue.extend({
  name: "AboutPage",
  components: {
    DefaultLayout,
    Breadcrumbs,
    MainAbout,
  },
});
</script>
