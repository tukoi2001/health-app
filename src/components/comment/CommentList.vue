<template>
  <div class="comment-list">
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
        <div class="comment-list__content-action">Reply</div>
        <SubComment v-if="item.children" :comments="item.children" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SubComment from "./SubComment.vue";

export default Vue.extend({
  name: "CommentList",
  components: { SubComment },
  props: {},
  data() {
    return {
      comments: [
        {
          id: 1,
          authImg: require("@/assets/images/blog/comment-img.png"),
          authName: "Martha Smith",
          createdAt: "10 July, 2022. 10:00",
          comment:
            "As Vietnam's fintech is young and promising, the market valuation has increased from US$ 0.7 to US$ 4.5 billion since 2016.",
        },
        {
          id: 2,
          authImg: require("@/assets/images/blog/comment-img.png"),
          authName: "Martha Smith",
          createdAt: "10 July, 2022. 10:00",
          comment:
            "As Vietnam's fintech is young and promising, the market valuation has increased from US$ 0.7 to US$ 4.5 billion since 2016.",
          children: [
            {
              id: 1,
              authImg: require("@/assets/images/blog/comment-img.png"),
              authName: "Martha Smith",
              createdAt: "10 July, 2022. 10:00",
              comment:
                "As Vietnam's fintech is young and promising, the market valuation has increased from US$ 0.7 to US$ 4.5 billion since 2016.",
            },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.comment-list {
  margin-bottom: 40px;

  &__item {
    @include flexBox(center, flex-start);
    gap: 30px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(97, 119, 152, 0.2);
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
      margin: 25px 0 40px;
      text-align: left;
    }

    &-action {
      @include linkSmall();
      color: $action-blue;
    }
  }
}
</style>
