<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    languages: [
      { flag: "us", language: "en", title: "English" },
      { flag: "es", language: "vi", title: "Tiếng Việt" },
    ],
  }),
});
</script>
