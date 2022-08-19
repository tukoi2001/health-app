<template>
  <div class="top-header" v-if="isShowTop">
    <p class="top-header__title">
      {{ $t("top_header") }}
    </p>
    <div class="top-header__action" @click="isShowTop = false">
      <v-icon color="#ffc800"> mdi-close </v-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TopHeader",
  data: () => ({
    isShowTop: true,
  }),
});
</script>

<style lang="scss" scoped>
.top-header {
  height: 36px;
  background-color: #103178;
  width: 100vw;
  position: relative;

  &__title {
    text-align: center;
    line-height: 36px;
    color: #ffc800;
    font-size: 15px;
    margin: 0;
  }

  &__action {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}

@media screen and (max-width: 1265px) {
  .top-header {
    &__title {
      font-size: 14px;
    }
  }
}
</style>
