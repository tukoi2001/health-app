<template>
  <DefaultLayout>
    <Breadcrumbs :titleOne="$t('contact')" />
    <ContactTop />
    <TheBanner
      :title="'We have helped brands of all kinds and businesses of every size grow their online revenue'"
      :description="'Are you ready to start your project? Contact us today and get started!'"
      :btnText="'Get Started'"
    />
    <ContactForm />
    <ClientReview />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import TheBanner from "@/components/common/TheBanner.vue";
import ContactTop from "./elements/ContactTop.vue";
import ContactForm from "./elements/ContactForm.vue";
import ClientReview from "@/components/common/ClientReview.vue";

export default Vue.extend({
  name: "ContactUsContainer",
  components: {
    DefaultLayout,
    Breadcrumbs,
    ContactTop,
    TheBanner,
    ContactForm,
    ClientReview,
  },
});
</script>
