<template>
  <div class="rhs">
    <keep-alive>
      <component v-bind:is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AccountDetails from "./RightHandSide/AccountDetails.vue";
import UpdateAddress from "./RightHandSide/UpdateAddress.vue";
import OrderHistory from "./RightHandSide/OrderHistory.vue";
import ChangePassword from "./RightHandSide/ChangePassword.vue";

export default Vue.extend({
  name: "RightHandSide",
  components: { AccountDetails, UpdateAddress, ChangePassword, OrderHistory },
  props: {
    currentTab: {
      type: String,
      default: "",
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
