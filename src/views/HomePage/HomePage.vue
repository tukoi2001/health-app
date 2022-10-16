<template>
  <DefaultLayout>
    <TheSlider />
    <TheService />
    <PopularCategory />
    <TheSubscribe />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TheSlider from "@/components/common/TheSlider.vue";
import TheSubscribe from "./elements/TheSubscribe.vue";
import TheService from "@/components/common/TheService.vue";
import PopularCategory from "./elements/PopularCategory.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    DefaultLayout,
    TheSlider,
    TheSubscribe,
    TheService,
    PopularCategory,
  },
  created() {
    Vue.$toast.open({
      message: String(this.$t("top_header")),
      type: "info",
    });
  },
});
</script>
