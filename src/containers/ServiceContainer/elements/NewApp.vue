<template>
  <div class="new-app">
    <v-container>
      <div class="new-app__wrapper">
        <div class="new-app__content">
          <div class="new-app__title">Empowering your new app</div>
          <div class="new-app__description">
            In the new digital era, users are in control of content and
            community, and experience design is essential.
          </div>
          <TheButton>How It Works</TheButton>
        </div>
        <div class="new-app__card">
          <img src="../../../assets/images/service/new-app-phone.png" alt="" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "NewApp",
  components: {
    TheButton,
  },
});
</script>

<style lang="scss" scoped>
.new-app {
  max-height: 370px;
  margin-top: 70px;

  &__wrapper {
    @include flexBox();
    gap: 130px;
    max-height: 370px;
    background-image: url("../../../assets/images/service/new-app.bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__content {
    @include flexBox(center, flex-start);
    flex-direction: column;
    max-width: 645px;
    padding-left: 165px;
  }

  &__title {
    @include headline1();
    color: $text-heading;
  }

  &__description {
    @include paragraph1();
    color: $text-heading;
    margin: 30px 0 50px;
  }

  &__card {
    @include flexBox();
    transform: translateY(-35px);
    flex-grow: 1;
  }
}
</style>
