<template>
  <div class="lhs">
    <div class="lhs__title">{{ $t("account_settings") }}</div>
    <div
      :class="['lhs__item', { 'lhs__item--active': currentTab === tab.tab }]"
      v-for="tab in tabs"
      :key="tab.id"
      @click="handleChangeTab(tab.tab)"
    >
      <v-icon class="lhs__item-icon" color="#103178"> {{ tab.icon }} </v-icon>
      {{ tab.title }}
    </div>
    <div class="lhs__item">
      <v-icon class="lhs__item-icon" color="#103178"> mdi-logout </v-icon>
      {{ $t("logout") }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LeftHandSide",
  components: {},
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    currentTab: {
      type: String,
      default: "",
      required: true,
    },
  },
  methods: {
    handleChangeTab(tab: string) {
      this.$emit("changeTab", tab);
    },
  },
});
</script>

<style lang="scss" scoped>
.lhs {
  &__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 31px;
    color: #333;
    margin-bottom: 8px;
  }

  &__item {
    padding: 10px;
    margin-top: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #103178;
    line-height: 24px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &-icon {
      margin-right: 8px;
    }

    &--active {
      background-color: rgb(216, 214, 214);
      font-weight: 900;
    }

    &:hover {
      background-color: rgb(236, 232, 232);
    }
  }
}
</style>
