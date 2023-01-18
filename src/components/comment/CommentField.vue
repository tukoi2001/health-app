<template>
  <div class="comment-field">
    <div class="comment-field__title">Write a Comment</div>
    <div class="comment-field__input">
      <v-textarea
        v-model.trim="comment"
        outlined
        name="comment"
        label="Enter comment"
      />
    </div>
    <TheButton>submit</TheButton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "../FormUI/TheButton.vue";

export default Vue.extend({
  name: "CommentField",
  components: { TheButton },
  props: {
    blogs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      comment: "",
    };
  },
});
</script>

<style lang="scss" scoped>
.comment-field {
  &__title {
    @include headline4();
    padding-bottom: 30px;
    color: $text-heading;
  }
}
</style>
