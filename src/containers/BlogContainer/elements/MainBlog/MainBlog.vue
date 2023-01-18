<template>
  <div class="main-blog">
    <v-container>
      <div class="main-blog__wrapper">
        <div class="main-blog__left">
          <router-view :blogs="blogs" />
        </div>
        <div class="main-blog__right">
          <SideBar :blogs="blogs" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "../RightSide/SideBar.vue";

export default Vue.extend({
  name: "MainBlog",
  components: {
    SideBar,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title:
            "Vietnamese Fintech Startup Raises $25 M Series B Round From Ospace, Vietnam Investments Group",
          description:
            "Vietnamese fintech startup Finhay has raised a $25 million Series B round led by Singapore-based Openspace Ventures, an early backer of Indonesia's GoTo Group and 30 Under 30 Asia honoree Rexy Josh Dorado's Manila-based social media site Kumu, and private firm Vietnam Investments Group.",
          authName: "Written By Admin",
          createdAt: "10 July, 2022",
          blogImg: require("@/assets/images/blog/blog.jpg"),
          authImg: require("@/assets/images/blog/auth.png"),
        },
        {
          id: 2,
          title:
            "Vietnamese Fintech Startup Raises $25 M Series B Round From Ospace, Vietnam Investments Group",
          description:
            "Vietnamese fintech startup Finhay has raised a $25 million Series B round led by Singapore-based Openspace Ventures, an early backer of Indonesia's GoTo Group and 30 Under 30 Asia honoree Rexy Josh Dorado's Manila-based social media site Kumu, and private firm Vietnam Investments Group.",
          authName: "Written By Admin",
          createdAt: "10 July, 2022",
          blogImg: require("@/assets/images/blog/blog.jpg"),
          authImg: require("@/assets/images/blog/auth.png"),
        },
        {
          id: 3,
          title:
            "Vietnamese Fintech Startup Raises $25 M Series B Round From Ospace, Vietnam Investments Group",
          description:
            "Vietnamese fintech startup Finhay has raised a $25 million Series B round led by Singapore-based Openspace Ventures, an early backer of Indonesia's GoTo Group and 30 Under 30 Asia honoree Rexy Josh Dorado's Manila-based social media site Kumu, and private firm Vietnam Investments Group.",
          authName: "Written By Admin",
          createdAt: "10 July, 2022",
          blogImg: require("@/assets/images/blog/blog.jpg"),
          authImg: require("@/assets/images/blog/auth.png"),
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.main-blog {
  padding: 50px;

  &__wrapper {
    @include flexBox(center, flex-start);
    gap: 60px;
  }

  &__left {
    width: calc(70% - 30px);
  }

  &__right {
    width: calc(30% - 30px);
  }

  &__action {
    margin-top: 50px;
  }
}
</style>
