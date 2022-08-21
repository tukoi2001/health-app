<template>
  <AuthLayout> </AuthLayout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    AuthLayout,
  },
});
</script>
