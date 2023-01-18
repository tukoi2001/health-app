<template>
  <div>
    <div v-for="item in comments" :key="item.id" class="comment-list__item">
      <div class="comment-list__image">
        <img :src="item.authImg" :alt="item.authName" />
      </div>
      <div class="comment-list__content">
        <div class="comment-list__content-auth">
          <div class="comment-list__content-name">{{ item.authName }}</div>
          <div class="comment-list__content-date">{{ item.createdAt }}</div>
        </div>
        <div class="comment-list__content-comment">{{ item.comment }}</div>
        <SubComment v-if="item.children" :comments="item.children" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SubComment",
  components: {},
  props: {
    comments: {
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
.comment-list {
  &__item {
    @include flexBox(center, flex-start);
    gap: 30px;
    padding-top: 20px;
  }

  &__image {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    flex-grow: 1;

    &-auth {
      @include flexBox(space-between);
    }

    &-name {
      @include paragraph2();
      color: $text-primary;
    }

    &-date {
      @include headline6();
      color: $text-normal;
    }

    &-comment {
      @include paragraph2();
      color: $text-normal;
      margin-top: 25px;
      text-align: left;
    }
  }
}
</style>
