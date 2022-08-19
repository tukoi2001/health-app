<template>
  <v-main>
    <v-layout column fill-height fill-width>
      <perfect-scrollbar>
        <template>
          <TopHeader />
          <TheHeader />
          <div class="layout-master">
            <SideBar />
            <div class="layout-master__main">
              <slot></slot>
            </div>
          </div>
        </template>
      </perfect-scrollbar>
    </v-layout>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import TopHeader from "@/components/header/TopHeader.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import SideBar from "@/components/common/SideBar.vue";

export default Vue.extend({
  name: "DefaultLayout",
  components: {
    TheHeader,
    TopHeader,
    SideBar,
  },
});
</script>

<style lang="scss" scoped>
.v-main {
  max-height: 100vh;
}

.ps {
  max-height: 100%;
  height: 100%;
}

.layout-master {
  display: flex;
  overflow: hidden;

  &__main {
    padding: 20px;
  }
}
</style>
