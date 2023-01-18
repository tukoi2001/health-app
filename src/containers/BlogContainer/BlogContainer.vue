<template>
  <DefaultLayout>
    <Breadcrumbs titleOne="Blog" />
    <MainBlog />
    <TheBanner
      title="Get help, find answers, download drivers, manuals and much more"
      description="Contact us online through chat and get support from an expert"
      btnText="Chat Now"
    />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import MainBlog from "./elements/MainBlog/MainBlog.vue";
import TheBanner from "@/components/common/TheBanner.vue";

export default Vue.extend({
  name: "BlogContainer",
  components: {
    DefaultLayout,
    Breadcrumbs,
    MainBlog,
    TheBanner,
  },
  methods: {},
});
</script>
