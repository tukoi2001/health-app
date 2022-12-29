<template>
  <div class="about">
    <TopAbout />
    <AboutBanner />
    <AboutFeature />
    <TheSubscribe />
    <TheService />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopAbout from "./TopAbout.vue";
import AboutBanner from "./AboutBanner.vue";
import TheSubscribe from "../../HomePage/elements/TheSubscribe.vue";
import AboutFeature from "./AboutFeature.vue";
import TheService from "@/components/common/TheService.vue";

export default Vue.extend({
  name: "MainAbout",
  components: {
    TopAbout,
    AboutBanner,
    TheSubscribe,
    AboutFeature,
    TheService,
  },
});
</script>

<style lang="scss" scoped></style>
