<template>
  <AboutContainer />
</template>

<script lang="ts">
import Vue from "vue";
import AboutContainer from "@/containers/AboutContainer/AboutContainer.vue";

export default Vue.extend({
  name: "AboutPage",
  components: {
    AboutContainer,
  },
});
</script>
