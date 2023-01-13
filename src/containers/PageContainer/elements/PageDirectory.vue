<template>
  <div class="page-directory">
    <v-container>
      <div class="page-directory__wrapper">
        <div class="page-directory__title">Our Features</div>
        <div class="page-directory__card">
          <div class="page-directory__product">
            <div class="page-directory__product-image">
              <div class="product-image-2">
                <img
                  :src="require('@/assets/images/pages/product-2.jpg')"
                  alt="product-image-2"
                />
              </div>
              <div class="product-image__item">
                <div class="product-image-1">
                  <img
                    :src="require('@/assets/images/pages/product-1.jpg')"
                    alt="product-image-1"
                  />
                </div>
                <div class="product-image-3">
                  <img
                    :src="require('@/assets/images/pages/product-3.jpg')"
                    alt="product-image-3"
                  />
                </div>
              </div>
            </div>
            <div class="page-directory__product-title">Our Products</div>
            <div class="page-directory__product--active">
              <TheButton :size="'large'" :onClick="goToProductsPage"
                >Visit Products</TheButton
              >
            </div>
          </div>
          <div class="page-directory__service">
            <div class="page-directory__service-title">Our Works</div>
            <div class="page-directory__service-image">
              <div class="work-image-2">
                <img
                  :src="require('@/assets/images/pages/work-2.jpg')"
                  alt="product-work-2"
                />
              </div>
              <div class="work-image__item">
                <div class="work-image-1">
                  <img
                    :src="require('@/assets/images/pages/work-1.jpg')"
                    alt="product-work-1"
                  />
                </div>
                <div class="work-image-3">
                  <img
                    :src="require('@/assets/images/pages/work-3.jpg')"
                    alt="product-work-3"
                  />
                </div>
              </div>
            </div>
            <div class="page-directory__service--active">
              <TheButton :size="'large'" :onClick="goToWorksPage"
                >Visit Works</TheButton
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
  name: "PageDirectory",
  components: {
    TheButton,
  },
  methods: {
    goToProductsPage() {
      this.$router.push({ name: "Products" });
    },
    goToWorksPage() {
      this.$router.push({ name: "Works" });
    },
  },
});
</script>

<style lang="scss" scoped>
.page-directory {
  padding: 60px 0;

  &__wrapper {
    @include flexBox();
    flex-direction: column;
    gap: 90px;
  }

  &__title {
    @include display2();
    color: $text-heading;
  }

  &__card {
    @include flexBox(space-between);
    gap: 120px;
  }

  &__product {
    position: relative;
    width: calc(50% - 60px);
    height: 100%;
    min-height: 470px;
    max-height: 470px;

    &-image {
      @include flexBox();
      gap: 30px;

      .product-image__item {
        @include flexBox(center, flex-start);
        flex-direction: column;
        gap: 30px;
      }
    }

    &-title {
      @include headline1();
      margin-top: 30px;
      color: $action-purple;
      text-align: left;
    }

    &--active {
      @include flexBox();
      opacity: 0;
      visibility: hidden;
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      border-radius: 20px;
      transition: all 0.3s ease;
    }

    &:hover {
      .page-directory__product--active {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__service {
    position: relative;
    width: calc(50% - 60px);
    height: 100%;
    min-height: 470px;
    max-height: 470px;
    cursor: pointer;

    &-title {
      @include headline1();
      margin-bottom: 30px;
      color: $action-purple;
      text-align: left;
    }

    &-image {
      @include flexBox();
      gap: 30px;
      flex-wrap: wrap;

      .work-image {
        &__item {
          @include flexBox(center, flex-start);
          flex-direction: column;
          gap: 30px;
        }

        &-2 {
          max-width: 200px;
          max-height: 450px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-1 {
          max-width: 200px;
          max-height: 280px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-3 {
          max-width: 150px;
          max-height: 150;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    &--active {
      @include flexBox();
      opacity: 0;
      visibility: hidden;
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;

      border-radius: 20px;
      transition: all 0.3s ease;
    }

    &:hover {
      .page-directory__service--active {
        opacity: 1;
        visibility: visible;
        z-index: 2;
      }
    }
  }
}
</style>
