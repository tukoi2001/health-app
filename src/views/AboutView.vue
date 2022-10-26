<template>
  <DefaultLayout></DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default Vue.extend({
  name: "AboutPage",
  components: {
    DefaultLayout,
  },
});
</script>
