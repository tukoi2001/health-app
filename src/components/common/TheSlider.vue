<template>
  <div class="the-slider">
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      height="600"
      hide-delimiters
      cycle
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <div
          class="the-slider__wrap"
          :style="{ 'background-color': item.background }"
        >
          <div
            class="the-slider__left"
            :style="{ 'flex-basis': item.basicLeft }"
          >
            <div class="the-slider__left-title">
              {{ item.title }}
            </div>
            <div class="the-slider__left-subtitle">
              {{ $t(item.subtitle) }}
            </div>
            <div class="the-slider__left-icon">
              <div class="the-slider__left-icon__bacterial">
                <img :src="item.icon" :alt="item.titleIcon" />
                {{ $t(item.titleIcon) }}
              </div>
              <div class="the-slider__left-icon__virus">
                <img :src="item.iconSecond" :alt="item.titleIconSecond" />
                {{ $t(item.titleIconSecond) }}
              </div>
            </div>
            <div class="the-slider__left-action">
              <v-btn :color="item.color" rounded large to="/shopping">
                {{ $t(item.action) }}
              </v-btn>
            </div>
          </div>
          <div class="the-slider__right" :style="{ 'flex-basis': item.basis }">
            <img :src="item.src" :alt="item.title" />
            <div :class="item.className" class="the-slider__right--box">
              {{ item.sale }}
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheSlider",
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/slider/slide2.png"),
          title: "Antibacterial Medical Mask",
          subtitle: "subtitle_mask",
          action: "shopping_now",
          icon: require("@/assets/images/slider/bacterial.svg"),
          iconSecond: require("@/assets/images/slider/virus.svg"),
          titleIcon: "anti_bacterial",
          titleIconSecond: "anti_virus",
          sale: "-15%",
          basis: "50%",
          basicLeft: "50%",
          background: "#f0f2f5",
          className: "the-slider__right--first",
          color: "#fd8d27",
        },
        {
          src: require("@/assets/images/slider/slide3.png"),
          title: "Antibacterial Spray",
          subtitle: "subtitle_spray",
          action: "shopping_now",
          icon: require("@/assets/images/slider/bacterial.svg"),
          iconSecond: require("@/assets/images/slider/virus.svg"),
          titleIcon: "anti_bacterial",
          titleIconSecond: "anti_virus",
          sale: "-25%",
          basis: "62%",
          basicLeft: "38%",
          background: "#ffcc00",
          className: "the-slider__right--second",
          color: "#ffffff",
        },
        {
          src: require("@/assets/images/slider/slide1.png"),
          title: "Candy Whitening",
          subtitle: "subtitle_teeth",
          action: "shopping_now",
          icon: require("@/assets/images/slider/bacterial.svg"),
          iconSecond: require("@/assets/images/slider/virus.svg"),
          titleIcon: "anti_bacterial",
          titleIconSecond: "anti_virus",
          sale: "-30%",
          basis: "78%",
          basicLeft: "22%",
          background: "#daecfa",
          className: "the-slider__right--third",
          color: "#fd8d27",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.the-slider {
  width: 100%;
  height: 100%;

  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 90px;
    height: 100%;
  }

  &__left {
    flex-shrink: 0;
    flex-grow: 0;

    &-title {
      font-size: 70px;
      line-height: 84px;
      font-weight: 600;
      color: #103178;
    }

    &-subtitle {
      color: #103178;
      margin-top: 15px;
      line-height: 29px;
      font-size: 20px;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 15px 0 25px;
      color: #103178;

      &__bacterial {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-right: 20px;

        img {
          margin-right: 8px;
        }
      }

      &__virus {
        display: flex;
        align-items: center;
        font-size: 14px;

        img {
          margin-right: 8px;
        }
      }
    }
  }

  &__right {
    width: 100%;
    height: 100%;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &--box {
      width: 133px;
      height: 133px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-size: 45px;
      line-height: 45px;
      font-weight: 900;
    }

    &--first {
      background-color: #fd8d27;
      left: 0;
      top: 17%;
      color: #103178;
    }

    &--second {
      background-color: #103178;
      right: 34%;
      top: 38%;
      color: #fff;
    }

    &--third {
      background-color: #fd8d27;
      right: 22%;
      top: 17%;
      color: #fff;
    }
  }
}

::v-deep {
  .v-btn {
    &__content {
      text-transform: capitalize;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .v-btn:not(.v-btn--round).v-size--large {
    height: 55px;
  }
}
</style>
