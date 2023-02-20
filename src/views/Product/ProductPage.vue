<template>
  <ProductContainer />
</template>

<script lang="ts">
import Vue from "vue";
import ProductContainer from "@/containers/ProductContainer/ProductContainer.vue";

export default Vue.extend({
  name: "ProductPage",
  components: {
    ProductContainer,
  },
});
</script>
