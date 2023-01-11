<template>
  <div class="header">
    <TheHeader />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "./TheHeader.vue";

export default Vue.extend({
  name: "HeaderMain",
  components: { TheHeader },
});
</script>

<style lang="scss" scoped>
.header {
  background-image: url("../../assets/images/logo/header.png");
  background-size: cover;
}
</style>
