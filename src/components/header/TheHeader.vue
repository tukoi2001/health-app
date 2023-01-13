<template>
  <div class="header">
    <v-container>
      <div class="header__wrapper">
        <div class="header__logo">
          <img :src="require('@/assets/images/logo/logo.png')" alt="logo" />
        </div>
        <div class="header__nav">
          <router-link
            v-for="item in nav"
            class="header__nav-action"
            :key="item.id"
            :to="item.to"
            >{{ item.title }}</router-link
          >
        </div>
        <div class="header__setting">
          <div class="header__setting-main">
            <TheButton :size="'large'" fab :btnStyle="'no-bg'" text icon
              ><SearchIcon
            /></TheButton>
            <TheButton :size="'large'" fab :btnStyle="'no-bg'" text icon
              ><SettingIcon
            /></TheButton>
            <TheButton :size="'large'" fab :btnStyle="'no-bg'" text icon
              ><CartIcon
            /></TheButton>
          </div>
          <TheButton
            class="header__setting-primary"
            :size="'large'"
            outlined
            :btnStyle="'text'"
            >Sign Up</TheButton
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";
import SearchIcon from "@/components/ui/SearchIcon.vue";
import CartIcon from "@/components/ui/CartIcon.vue";
import SettingIcon from "@/components/ui/SettingIcon.vue";

export default Vue.extend({
  name: "TheHeader",
  components: { TheButton, SearchIcon, CartIcon, SettingIcon },
  data() {
    return {
      nav: [
        {
          id: 1,
          title: "Home",
          to: "/",
        },
        {
          id: 2,
          title: "Services",
          to: "/services",
        },
        {
          id: 3,
          title: "About",
          to: "/about",
        },
        {
          id: 4,
          title: "Pages",
          to: "/pages",
        },
        {
          id: 5,
          title: "Blog",
          to: "/blog",
        },
        {
          id: 6,
          title: "Contact",
          to: "/contact",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  padding: 16px 0;

  &__wrapper {
    @include flexBox();
    gap: 30px;
  }

  &__logo {
    cursor: pointer;
    flex-shrink: 0;
  }

  &__nav {
    @include flexBox();
    gap: 30px;
    flex-grow: 1;

    &-action {
      @include linkLarge();
      text-decoration: none;
      color: $text-white;
      transition: all 0.3s ease;

      &:hover {
        color: $text-normal;
      }
    }

    .router-link-exact-active {
      position: relative;
      color: $text-normal;

      &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: $action-green;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }

  &__setting {
    @include flexBox();
    gap: 20px;

    &-primary {
      background-color: transparent !important;
      color: $text-white !important;
    }
  }
}
</style>
