<template>
  <ContactUsContainer />
</template>

<script lang="ts">
import Vue from "vue";
import ContactUsContainer from "@/containers/ContactUsContainer/ContactUsContainer.vue";

export default Vue.extend({
  name: "ContactUs",
  components: {
    ContactUsContainer,
  },
});
</script>
