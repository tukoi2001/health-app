<template>
  <v-main>
    <perfect-scrollbar>
      <div class="layout-master">
        <component :is="headerComponent" />
        <slot></slot>
        <TheFooter />
      </div>
    </perfect-scrollbar>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import HeaderMain from "@/components/header/HeaderMain.vue";

export default Vue.extend({
  name: "DefaultLayout",
  components: {
    TheFooter,
    TheHeader,
    HeaderMain,
  },
  computed: {
    isHomePage(): boolean {
      return this.$route.name === "Home";
    },
    headerComponent(): string {
      return this.isHomePage ? "TheHeader" : "HeaderMain";
    },
  },
});
</script>

<style lang="scss" scoped>
.v-main {
  max-height: 100vh;
}

.ps {
  max-height: 100%;
  height: 100%;
  flex-grow: 1;
}

.layout-master {
  width: 100%;
  height: 100%;
}

::v-deep {
  .container {
    padding: 5px 12px;
  }
}
</style>
