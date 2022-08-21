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
            <v-row>
              <v-col cols="6" sm="6" md="6" lg="6">
                <div class="auth-layout__slider">
                  <v-carousel cycle hide-delimiters show-arrows-on-hover>
                    <v-carousel-item
                      v-for="(item, i) in items"
                      :key="i"
                      :src="item.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </v-carousel>
                </div>
              </v-col>
              <v-col cols="6" sm="6" md="6" lg="6">
                <div class="auth-layout__right">
                  <slot></slot>
                </div>
              </v-col>
            </v-row>
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
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/auth/img-1.jpg"),
        },
        {
          src: require("@/assets/images/auth/img-2.jpg"),
        },
        {
          src: require("@/assets/images/auth/img-3.jpg"),
        },
      ],
    };
  },
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
  background: -webkit-linear-gradient(bottom, #3c5b8a, #103178);
  overflow: hidden;
  position: relative;

  &__back {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  &__wrap {
    background-color: rgba(244, 234, 234, 0.3);
    height: 80%;
    border-radius: 8px;
    padding: 20px;
  }

  &__slider {
    border-radius: 8px;
    overflow: hidden;
  }

  &__right {
    width: 350px;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
    padding: 30px;
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
