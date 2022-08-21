<template>
  <DefaultLayout>
    <TheSlider />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TheSlider from "@/components/common/TheSlider.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    DefaultLayout,
    TheSlider,
  },
  created() {
    Vue.$toast.open({
      message: String(this.$t("top_header")),
      type: "info",
    });
  },
});
</script>
