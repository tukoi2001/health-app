<template>
  <DefaultLayout>
    <hello-world />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    HelloWorld,
    DefaultLayout,
  },
});
</script>
