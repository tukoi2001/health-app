<template>
  <BlogContainer />
</template>

<script lang="ts">
import Vue from "vue";
import BlogContainer from "@/containers/BlogContainer/BlogContainer.vue";

export default Vue.extend({
  name: "BlogsPage",
  components: {
    BlogContainer,
  },
});
</script>
