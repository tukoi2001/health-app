<template>
  <div class="blog-item">
    <div class="blog-item__image">
      <img :src="blog.blogImg" :alt="blog.title" />
    </div>
    <div class="blog-item__content">
      <div class="blog-item__auth">
        <div class="blog-item__auth-image">
          <img :src="blog.authImg" :alt="blog.authName" />
          {{ blog.authName }}
        </div>
        <div class="blog-item__auth-create">
          {{ blog.createdAt }}
        </div>
      </div>
      <div class="blog-item__title">
        {{ blog.title }}
      </div>
      <div class="blog-item__description">
        {{ blog.description }}
      </div>
      <TheButton size="large" :onClick="() => viewBlogDetail(blog.id)"
        >Read more</TheButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "BlogItem",
  components: {
    TheButton,
  },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewBlogDetail(id: string): void {
      this.$router.push({ name: "Blog Details", params: { blogId: id } });
    },
  },
});
</script>

<style lang="scss" scoped>
.blog-item {
  background-color: $background-white;
  border: 1px solid $border-grey;
  border-radius: 5px;
  overflow: hidden;

  &__image {
    width: 800px;
    height: 450px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 25px 40px 40px;
  }

  &__auth {
    @include flexBox(space-between);
    margin-bottom: 30px;

    &-image {
      @include flexBox();
      @include linkLarge();
      gap: 10px;
      color: $text-normal;

      & > img {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    &-create {
      @include headline6();
      color: $text-normal;
    }
  }

  &__title {
    @include headline2();
    color: $text-heading;
  }

  &__description {
    @include paragraph2();
    color: $text-normal;
    margin: 30px 0 40px;
  }

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }
}
</style>
