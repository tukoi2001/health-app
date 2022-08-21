<template>
  <v-main>
    <v-layout column fill-height fill-width>
      <template>
        <TheHeader />
        <div class="layout-master">
          <SideBar />
          <perfect-scrollbar>
            <div class="layout-master__main">
              <slot></slot>
            </div>
          </perfect-scrollbar>
        </div>
      </template>
    </v-layout>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "@/components/header/TheHeader.vue";
import SideBar from "@/components/common/SideBar.vue";

export default Vue.extend({
  name: "DefaultLayout",
  components: {
    TheHeader,
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
  width: 100%;
  height: 100%;

  &__main {
    padding: 20px;
    width: 100%;
  }
}
</style>
