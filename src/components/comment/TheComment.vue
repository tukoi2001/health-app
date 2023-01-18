<template>
  <div class="comment">
    <div class="comment__title">Comments</div>
    <CommentList />
    <CommentField />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CommentList from "./CommentList.vue";
import CommentField from "./CommentField.vue";

export default Vue.extend({
  name: "TheComment",
  components: { CommentList, CommentField },
  props: {
    blogs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.comment {
  padding: 30px;
  border: 1px solid rgba(97, 119, 152, 0.2);

  &__title {
    @include headline4();
    padding-bottom: 30px;
    color: $text-heading;
    border-bottom: 1px solid rgba(97, 119, 152, 0.2);
  }
}
</style>
