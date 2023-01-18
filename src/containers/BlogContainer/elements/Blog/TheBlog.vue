<template>
  <div>
    <BlogItem v-for="item in blogs" :key="item.id" :blog="item" />
    <TheButton class="action">Show more</TheButton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogItem from "../LeftSide/BlogItem.vue";

import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "MainBlog",
  props: {
    blogs: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TheButton,
    BlogItem,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.action {
  margin-top: 50px;
}
</style>
