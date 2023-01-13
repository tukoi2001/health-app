<template>
  <PageContainer />
</template>

<script lang="ts">
import Vue from "vue";
import PageContainer from "@/containers/PageContainer/PageContainer.vue";

export default Vue.extend({
  name: "ThePages",
  components: {
    PageContainer,
  },
});
</script>
