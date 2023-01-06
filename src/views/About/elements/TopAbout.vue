<template>
  <div class="top-about">
    <v-row align="center">
      <v-col cols="4">
        <img
          class="top-about__img"
          :src="require('@/assets/images/about-us/about-01.png')"
          alt="about-banner"
        />
      </v-col>
      <v-col cols="8">
        <div class="top-about__content">
          <div class="top-about__section">
            <v-icon color="white" size="16">mdi-cart-variant</v-icon>
            About Store
          </div>
          <div class="top-about__title">
            Online shopping includes both buying things online.
          </div>
          <div class="top-about__subtitle">
            Salesforce B2C Commerce can help you create unified, intelligent
            digital commerce experiences — both online and in the store.
          </div>
          <div class="top-about__des">
            Empower your sales teams with industry tailored solutions that
            support manufacturers as they go digital, and adapt to changing
            markets & customers faster by creating new business. Salesforce B2B
            <br />
            Commerce offers buyers the seamless, self-service experience of
            online shopping with all the B2B.
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TopAbout",
  components: {},
});
</script>

<style lang="scss" scoped>
.top-about {
  padding: 80px 20px;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  &__content {
    padding-left: 40px;
  }

  &__section {
    font-size: 14px;
    font-weight: bold;
    color: #103178;
    line-height: 21px;
    margin-bottom: 10px;

    .v-icon {
      background-color: #103178;
      padding: 5px;
      border-radius: 50%;
      margin-right: 4px;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    color: #292930;
    margin-bottom: 24px;
  }

  &__subtitle {
    font-size: 20px;
    line-height: 29px;
    color: #777777;
    margin-bottom: 22px;
  }

  &__des {
    font-size: 14px;
    line-height: 21px;
    color: #777777;
  }
}
</style>
