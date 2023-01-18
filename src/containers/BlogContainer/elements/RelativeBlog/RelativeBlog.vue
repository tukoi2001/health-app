<template>
  <div class="relative-blog">
    <div class="relative-blog__title">Related Articles</div>
    <div class="relative-blog__wrapper">
      <div v-for="item in blogs" :key="item.id" class="relative-blog__item">
        <div class="relative-blog__item-image">
          <img :src="item.blogImg" :alt="item.title" />
        </div>
        <div class="relative-blog__item-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RelativeBlog",
  components: {},
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
.relative-blog {
  margin: 50px 0;
  padding: 40px;
  background-color: $background-light;
  border-radius: 5px;

  &__title {
    @include headline4();
    margin-bottom: 30px;
    color: $text-heading;
  }

  &__wrapper {
    @include flexBox();
    gap: 30px;
  }

  &__item {
    &-image {
      width: 100%;
      height: auto;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    &-title {
      @include paragraph1();
      @include truncate-multiline-line();
      margin-top: 20px;
      color: $text-heading;
    }
  }
}
</style>
