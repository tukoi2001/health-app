<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__item">
      <router-link to="/">{{ $t("home") }}</router-link>
    </div>
    <div class="breadcrumbs__item" v-if="titleOne">
      <v-icon size="20">mdi-chevron-right</v-icon>
      {{ titleOne }}
    </div>
    <div class="breadcrumbs__item" v-if="titleTwo">
      <v-icon size="20">mdi-chevron-right</v-icon>
      {{ titleTwo }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BreadcrumbsComponent",
  props: {
    titleOne: {
      type: String,
      default: "",
    },
    titleTwo: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  gap: 20px;
  padding: 15px 0;

  &__item {
    font-weight: 600;
    font-size: 14px;
    color: #103178;

    a {
      text-decoration: none;
      color: #103178;
    }

    .v-icon {
      margin-right: 10px;
    }
  }
}
</style>
