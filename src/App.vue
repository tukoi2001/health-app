<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;500;600;700;800;900&display=swap");
.v-application {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
