<template>
  <v-btn
    :class="className"
    :block="block"
    :color="color"
    :icon="icon"
    :depressed="depressed"
    :disabled="disabled"
    :elevation="elevation"
    :rounded="rounded"
    :fab="fab"
    :text="text"
    :loading="loading"
    :plain="plain"
    :outlined="outlined"
    :tile="tile"
    :type="type"
    @click="onClick"
  >
    <span class="btn-icon__left"><slot name="icon-left"></slot></span>
    <slot name="default"></slot>
    <span class="btn-icon__right"><slot name="icon-right"></slot></span>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheButton",
  props: {
    size: {
      type: String,
      default: "small",
      validator: (value: string) => ["small", "large"].includes(value),
    },
    btnStyle: {
      type: String,
      default: "normal",
      validator: (value: string) => ["normal", "text", "no-bg"].includes(value),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    fab: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    elevation: {
      type: Number || String,
      default: undefined,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
      validator: (value: string) => ["button", "submit"].includes(value),
    },
    onClick: {
      type: Function,
      default: () => {
        //
      },
    },
  },
  computed: {
    className(): string {
      return `btn-primary btn-${this.size} btn-${this.btnStyle}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  &-primary {
    font-family: "Outfit" !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 15px !important;
    line-height: 24px !important;
    letter-spacing: -0.3px !important;
    text-align: center !important;
    letter-spacing: -0.3px !important;
    text-transform: uppercase !important;
  }

  &-normal {
    background: $action-blue !important;
    color: $text-white !important;
  }

  &-text {
    background: $background-white !important;
    color: $text-dark !important;
    border: 2px solid $border-grey;
  }

  &-no-bg {
    background: transparent !important;
    color: $text-white !important;
  }

  &-small {
    height: 48px !important;
  }

  &-large {
    height: 56px !important;
  }

  &-icon {
    &__left {
      margin-right: 8px;
    }

    &__right {
      margin-left: 8px;
    }
  }
}
</style>
