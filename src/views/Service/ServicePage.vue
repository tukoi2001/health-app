<template>
  <ServiceContainer />
</template>

<script lang="ts">
import Vue from "vue";
import ServiceContainer from "@/containers/ServiceContainer/ServiceContainer.vue";

export default Vue.extend({
  name: "ContactUs",
  components: {
    ServiceContainer,
  },
});
</script>
