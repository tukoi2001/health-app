<template>
  <div class="blog-detail">
    <v-container>
      <div class="blog-detail__image">
        <img :src="blogs[0].blogImg" :alt="blogs[0].title" />
      </div>
      <div class="blog-detail__wrapper">
        <div class="blog-detail__auth">
          <div class="blog-detail__auth-top">
            <div class="blog-detail__auth-image">
              <img :src="blogs[0].authImg" :alt="blogs[0].authName" />
              {{ blogs[0].authName }}
            </div>
            <div class="blog-detail__auth-date">
              {{ blogs[0].createdAt }}
            </div>
          </div>
          <div class="blog-detail__auth-title">{{ blogs[0].title }}</div>
          <div class="blog-detail__auth-description">
            {{ blogs[0].description }}
          </div>
        </div>
        <div class="blog-detail__content">
          Other investors in the round included Singapore-based Insignia
          Ventures Partners, TVS, Headline,TNB Aura and IVC, Finhay said in a
          statement. Earlier this month, Insignia, whose other investments
          include GoTo and Singapore-based used-car unicorn Carro, led a
          pre-Series A funding round for Bluesheets, a financial data startup in
          Singapore. The Vietnamese economy has grown since 2012, posting 6%
          growth or higher every year through 2019 on the strength of export
          manufacturing and the spending power of its population. Growth fell to
          2.9% in pandemic year 2020 and 2.6% last year. "A large number of
          people are now looking for ways to start investing - often for the
          first time, and we are exploring different ways to enable them," added
          Nghiem. "It’s such an important inflection point." Other rising
          fintech platforms in Vietnam include MoMo, which has raised money from
          the likes of Goldman Sachs, Warburg Pincus and Vietnam Investments
          Group, and Toss, the fintech superapp operated by South Korean
          billionaire Lee Seung-gun's Viva Republica.
        </div>
      </div>
      <RelativeBlog :blogs="relativeBlog" />
      <TheComment />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RelativeBlog from "../RelativeBlog/RelativeBlog.vue";
import TheComment from "@/components/comment/TheComment.vue";

export default Vue.extend({
  name: "MainBlog",
  components: {
    RelativeBlog,
    TheComment,
  },
  props: {
    blogs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
    relativeBlog() {
      return this.blogs.slice(0, 3);
    },
  },
});
</script>

<style lang="scss" scoped>
.blog-detail {
  &__image {
    width: 100%;
    height: auto;
    max-height: 470px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__wrapper {
    padding: 25px 40px;
  }

  &__auth {
    margin-bottom: 50px;

    &-top {
      @include flexBox(space-between);
      margin-bottom: 30px;
    }

    &-image {
      @include flexBox();
      @include linkLarge();
      gap: 10px;
      color: $text-normal;

      & > img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }

    &-date {
      @include headline6();
      color: $text-normal;
    }

    &-title {
      @include headline2();
      color: $text-heading;
      margin-bottom: 30px;
    }

    &-description {
      @include paragraph2();
      color: $text-heading;
    }
  }

  &__content {
    @include paragraph2();
    color: $text-normal;
  }
}
</style>
