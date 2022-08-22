<template>
  <v-main>
    <v-layout column fill-height fill-width>
      <div class="auth-layout">
        <div class="auth-layout__back">
          <v-btn rounded large to="/" color="#fff">
            <v-icon class="mr-2" color="#103178" outlined>
              mdi-home-circle-outline </v-icon
            >{{ $t("back_to_home") }}
          </v-btn>
        </div>
        <v-container>
          <div class="auth-layout__wrap">
            <div class="auth-layout__box">
              <slot></slot>
            </div>
          </div>
        </v-container>
      </div>
    </v-layout>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AuthLayout",
});
</script>

<style lang="scss" scoped>
.auth-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-image: url("../assets/images/auth/img-1.jpg");
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;

  &__back {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  &__wrap {
    background-color: rgba(244, 234, 234, 0);
    height: 80%;
    border-radius: 8px;
    padding: 20px;
  }

  &__box {
    width: 380px;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0px 2px 3px #cdd8df;
  }
}

::v-deep {
  .v-btn__content {
    text-transform: capitalize;
    color: #103178;
    font-size: 15px;
  }
}
</style>
