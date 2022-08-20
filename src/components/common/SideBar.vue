<template>
  <div class="side-bar">
    <v-card>
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="require('@/assets/images/logo/logo.svg')" />
            </v-list-item-avatar>
            <v-list-item-title class="side-bar__title">
              MyMeDi
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list nav dense class="px-2">
          <v-list-item link v-for="item in firstNavigation" :key="item.title">
            <v-list-item-icon>
              <v-icon color="primary" size="25">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link :to="item.href" class="side-bar__link">
                {{ $t(item.title) }}
                <v-icon class="side-bar__link--active" color="success">
                  mdi-check-all
                </v-icon>
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <div class="side-bar__bottom">
            <v-divider></v-divider>
            <v-list-item
              link
              v-for="item in secondNavigation"
              :key="item.title"
            >
              <v-list-item-icon>
                <v-icon size="25" color="primary">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link :to="item.href" class="side-bar__link">
                  {{ $t(item.title) }}
                </router-link>
                <v-icon class="side-bar__link--active" color="success">
                  mdi-check-all
                </v-icon>
              </v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SideBar",
  computed: {
    firstNavigation() {
      return [
        {
          title: "home",
          icon: "mdi-home-circle-outline",
          href: "/",
        },
        {
          title: "shopping",
          icon: "mdi-cart-minus",
          href: "/shopping",
        },
        {
          title: "blogs",
          icon: "mdi-post",
          href: "/blogs",
        },
        {
          title: "about_us",
          icon: "mdi-account-multiple-check-outline",
          href: "/about-us",
        },
        {
          title: "contact",
          icon: "mdi-phone-message-outline",
          href: "/contact",
        },
      ];
    },

    secondNavigation() {
      return [
        {
          title: "account_setting",
          icon: "mdi-cog-sync-outline",
          href: "/account-setting",
        },
        {
          title: "logout",
          icon: "mdi-logout",
          href: "/logout",
        },
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.side-bar {
  height: calc(100vh - 94px);

  &__bottom {
    position: absolute;
    bottom: 0;
    width: calc(100% - 8px);
    padding: 8px 8px 8px 0;
  }

  &__title {
    font-weight: 900;
    font-size: 22px;
    color: #103178;
  }

  &__link {
    font-weight: 600;
    font-size: 15px;
    color: rgba(16, 49, 120, 0.8);
    text-decoration: none;
    position: relative;

    &--active {
      visibility: hidden;
    }
  }

  .router-link-active {
    font-weight: 900;
    color: #103178;

    & > .side-bar__link--active {
      visibility: visible;
    }
  }

  .v-card {
    height: 100%;
  }
}

::v-deep {
  .v-image__image--cover {
    background-size: auto;
  }
}
</style>
