<template>
  <HomeContainer />
</template>

<script lang="ts">
import Vue from "vue";
import HomeContainer from "@/containers/HomeContainer/HomeContainer.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    HomeContainer,
  },
  created() {
    Vue.$toast.open({
      message: String(this.$t("top_header")),
      type: "info",
    });
  },
});
</script>
