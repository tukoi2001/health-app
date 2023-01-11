<template>
  <v-container>
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
  </v-container>
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
  @include flexBox(flex-start);
  gap: 20px;
  padding: 15px 0;

  &__item {
    @include linkSmall();
    @include flexBox(flex-start);
    color: $text-normal;

    a {
      text-decoration: none;
      color: $text-heading;
    }

    .v-icon {
      margin-right: 10px;
    }
  }
}
</style>
