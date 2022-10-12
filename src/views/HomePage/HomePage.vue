<template>
  <DefaultLayout>
    <TheSlider />
    <TheSubscribe />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TheSlider from "@/components/common/TheSlider.vue";
import TheSubscribe from "./elements/TheSubscribe.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    DefaultLayout,
    TheSlider,
    TheSubscribe,
  },
  created() {
    Vue.$toast.open({
      message: String(this.$t("top_header")),
      type: "info",
    });
  },
});
</script>
