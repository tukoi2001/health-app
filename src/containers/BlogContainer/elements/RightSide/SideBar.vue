<template>
  <div class="side-bar">
    <div class="side-bar__item">
      <div class="side-bar__title">Search</div>
      <v-text-field
        v-model="searchText"
        append-icon="mdi-magnify"
        outlined
        type="text'"
        name="search"
        label="Search here..."
        placeholder="Enter text..."
      />
    </div>
    <div class="side-bar__item">
      <div class="side-bar__title">Latest News</div>
      <div class="latest-new">
        <div v-for="item in blogs" :key="item.id" class="latest-new__item">
          <div class="latest-new__item-image">
            <img :src="item.blogImg" :alt="item.title" />
          </div>
          <div class="latest-new__item-title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="side-bar__subscribe">
      <div class="subscribe-new">
        <div class="subscribe-new__title">
          Subscribe To Our Newsletter Today
        </div>
        <TheButton>Subscribe</TheButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "SideBar",
  props: {
    blogs: {
      type: Array,
      default: () => [],
    },
  },
  components: { TheButton },
  data() {
    return {
      searchText: "",
    };
  },
});
</script>

<style lang="scss" scoped>
.side-bar {
  @include flexBox();
  flex-direction: column;
  gap: 30px;

  &__item {
    width: 100%;
    padding: 30px 30px 10px;
    background-color: $background-light;
    border-radius: 5px;
  }

  &__title {
    @include headline4();
    color: $text-heading;
    margin-bottom: 30px;
  }

  .latest-new {
    &__item {
      @include flexBox();
      gap: 20px;

      &-image {
        flex-shrink: 0;
        width: 50px;
        height: 50px;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-title {
        @include paragraph3();
        color: $text-normal;
      }

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }

  &__subscribe {
    background-image: url("@/assets/images/blog/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 400px;
    border-radius: 5px;

    .subscribe-new {
      @include flexBox();
      flex-direction: column;
      width: 100%;
      height: 100%;

      &__title {
        @include headline3();
        text-align: center;
        color: $text-white;
        padding: 0 50px 40px;
      }
    }
  }
}
</style>
