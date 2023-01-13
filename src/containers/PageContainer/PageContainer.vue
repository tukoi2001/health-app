<template>
  <DefaultLayout>
    <Breadcrumbs titleOne="Pages" />
    <PageDirectory />
    <PagePlatform />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageDirectory from "./elements/PageDirectory.vue";
import PagePlatform from "./elements/PagePlatform.vue";

export default Vue.extend({
  name: "PageContainer",
  components: {
    DefaultLayout,
    Breadcrumbs,
    PageDirectory,
    PagePlatform,
  },
});
</script>
