<template>
  <div class="digital-product">
    <v-container>
      <div class="digital-product__wrapper">
        <div class="digital-product__title">
          Digital products that people love to use
          <div class="digital-product__subtitle">
            Applying behavioral science to customer experience
          </div>
        </div>
        <div class="digital-product__card">
          <div class="digital-product__card-item">
            <div class="digital-product__card-image">
              <img
                :src="require('@/assets/images/home/card-item-1.png')"
                alt="card-product-1"
              />
              <div class="image image-item-1">
                <img
                  :src="require('@/assets/images/home/item-1.png')"
                  alt="item1"
                />
              </div>
              <img
                :src="require('@/assets/images/home/item-2.png')"
                class="image image-item-2"
                alt="item2"
              />
            </div>
            <div class="digital-product__card-content">
              <div class="content__title">Web3 Experience Design</div>
              <div class="content__subtitle">
                In the new digital era, users are in control of content and
                community, and experience design is essential.
              </div>
              <div
                v-for="item in web3_experience"
                :key="item.id"
                class="digital-product__feature"
              >
                <div class="digital-product__feature-icon">
                  <img :src="item.image" :alt="item.title" />
                </div>
                <div class="digital-product__feature-content">
                  {{ item.title }}
                  <div class="digital-product__feature-description">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="digital-product__card-item">
            <div class="digital-product__card-content">
              <div class="content__title">We create world-class products</div>
              <div class="content__subtitle">
                We're a web design agency creating next level websites by
                strategically blending user experience and brand storytelling.
                <br /><br />
                Our fullstack design and development agency based in San
                Francisco provides frontend and backend development services
                working closely with our designers. As a UX UI and app
                development company, we build native mobile apps for iOS and
                Android, web applications, apps for wearables, and
                B2B/enterprise software.
              </div>
              <TheButton class="content__action" :size="'large'"
                >Discover Now</TheButton
              >
            </div>
            <div class="digital-product__card-image">
              <img
                :src="require('@/assets/images/home/card-item-2.png')"
                alt="card-product-1"
              />
              <img
                :src="require('@/assets/images/home/item-3.png')"
                class="image image-item-3"
                alt="item3"
              />
              <img
                :src="require('@/assets/images/home/item-4.png')"
                class="image image-item-4"
                alt="item4"
              />
            </div>
          </div>
          <!-- Card 3 -->
          <div class="digital-product__card-item">
            <div class="digital-product__card-image">
              <img
                :src="require('@/assets/images/home/card-item-3.png')"
                alt="card-product-1"
              />
              <img
                :src="require('@/assets/images/home/item-5.png')"
                class="image image-item-5"
                alt="item5"
              />
              <img
                :src="require('@/assets/images/home/item-6.png')"
                class="image image-item-6"
                alt="item6"
              />
            </div>
            <div class="digital-product__card-content">
              <div class="content__title">UI/UX design and branding agency</div>
              <div class="content__subtitle">
                We start each new digital product design partnership with an
                indepth discovery phase to immerse ourselves in your business.
                Our UX/UI designers interview stakeholders, conduct user
                research, analyze your competition, and consolidate content.
                <br /><br />
                The result is an action plan on executing a holistic brand and
                user experience.
              </div>
              <TheButton class="content__action" :size="'large'"
                >Our Services</TheButton
              >
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheButton from "@/components/FormUI/TheButton.vue";

export default Vue.extend({
  name: "DigitalProduct",
  components: { TheButton },
  data() {
    return {
      web3_experience: [
        {
          id: 1,
          title: "Design & Development Systems",
          description:
            "Chat, start meetings or join them with a click from within your conversation.",
          image: require("@/assets/images/home/icon-1.svg"),
        },
        {
          id: 2,
          title: "Digital Growth Strategy",
          description:
            "Chat, start meetings or join them with a click from within your conversation.",
          image: require("@/assets/images/home/icon-2.svg"),
        },
        {
          id: 3,
          title: "User Journey Mapping",
          description:
            "Chat, start meetings or join them with a click from within your conversation.",
          image: require("@/assets/images/home/icon-3.svg"),
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.digital-product {
  padding: 120px 0;
  background-color: $background-light-alt;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 60px;
  }

  &__title {
    @include display3();
    margin-bottom: 50px;
    text-align: center;
  }

  &__subtitle {
    @include paragraph1();
    margin-top: 30px;
    color: $text-normal;
  }

  &__card {
    @include flexBox();
    flex-direction: column;
    gap: 150px;
    padding: 60px 0;
    border-radius: 24px;

    &-item {
      @include flexBox();
      gap: 300px;
      width: 100%;
    }

    &-image {
      position: relative;
      flex-shrink: 0;
      width: 100%;
      max-width: 630px;
      height: 100%;
      padding: 0 35px;

      & > img {
        width: 100%;
        max-width: 560px;
        height: 100%;
        object-fit: cover;
      }

      .image {
        position: absolute;

        &-item-1 {
          bottom: 50px;
          right: -35px;
          max-width: 400px;
          max-height: 500px;

          & > img {
            object-fit: cover;
            max-width: 400px;
            max-height: 500px;
            width: 100%;
            height: 100%;
          }
        }

        &-item-2 {
          top: 50px;
          left: -35px;
          max-width: 242px;
          max-height: 270px;
        }

        &-item-3 {
          top: 90px;
          right: -35px;
          max-width: 362px;
          max-height: 218px;
        }

        &-item-4 {
          bottom: 90px;
          left: -70px;
          max-width: 400px;
          max-height: 500px;
        }

        &-item-5 {
          top: 50px;
          right: -35px;
          max-width: 400px;
          max-height: 530px;
        }

        &-item-6 {
          bottom: 50px;
          left: -55px;
          max-width: 340px;
          max-height: 340px;
        }
      }
    }

    &-content {
      max-width: 570px;

      .content {
        &__title {
          @include headline2();
          color: $text-heading;
        }

        &__subtitle {
          @include paragraph1();
          margin: 30px 0 50px;
          color: $text-normal;
        }

        &__action {
          margin-top: 70px;
        }
      }
    }
  }

  &__feature {
    @include flexBox(flex-start, flex-start);
    gap: 13px;
    max-width: 470px;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &-icon {
      flex-shrink: 0;
    }

    &-content {
      @include headline4;
      color: $text-heading;
    }

    &-description {
      @include paragraph2();
      margin-top: 10px;
      color: $text-normal;
    }
  }
}

@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .digital-product__card {
    &-item {
      gap: 130px;
    }

    &-image {
      max-width: 470px;

      & > img {
        max-width: 470px;
      }

      .image {
        &-item-1 {
          max-width: 300px;
          max-height: 400px;

          & > img {
            max-width: 300px;
            max-height: 400px;
          }
        }

        &-item-2 {
          max-width: 242px;
          max-height: 170px;
        }

        &-item-3 {
          max-width: 262px;
          max-height: 118px;
        }

        &-item-4 {
          max-width: 300px;
          max-height: 370px;
        }

        &-item-5 {
          max-width: 300px;
          max-height: 400px;
        }

        &-item-6 {
          max-width: 200px;
          max-height: 200px;
        }
      }
    }
  }
}
</style>
