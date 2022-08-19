<template>
  <v-main>
    <v-layout column fill-height fill-width>
      <perfect-scrollbar>
        <slot></slot>
      </perfect-scrollbar>
    </v-layout>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DefaultLayout",
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
</style>
