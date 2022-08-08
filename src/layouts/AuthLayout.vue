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
  name: "AuthLayout",
});
</script>
