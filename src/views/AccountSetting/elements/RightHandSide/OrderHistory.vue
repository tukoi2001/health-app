<template>
  <div class="order-history">
    <div class="order-history__title">{{ $t("update_address") }}</div>
    <div class="order-history__subtitle">
      {{ $t("update_address_hint_text") }}
    </div>
    <div class="order-history__tab">
      <div
        :class="[
          'order-history__tab-item',
          { 'order-history__tab-item--active': tab.id === currentTab },
        ]"
        v-for="tab in tabs"
        :key="tab.id"
        @click="currentTab = tab.id"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="order-history__items">
      <div class="order-history__item">
        <div class="order-history__item-top">
          <span
            ><v-icon color="success" size="20">mdi-truck</v-icon> Giao hàng
            thành công</span
          >
          <span>Đã Giao</span>
        </div>
        <div class="order-history__item-product">
          <div class="product__image">
            <img
              src="https://cf.shopee.vn/file/587c80d098a9566c5d7496aec10e0cdf_tn"
              alt=""
            />
          </div>
          <div class="product__information">
            <div class="product__information-title">
              Mũ Bảo Hiểm CMR204 Đủ Màu Có Lỗ Thông Gió FreeShip - Sơn Màu Đúng
              Chuẩn - CTY TNHH CAMRY
            </div>
            <div class="product__information-description">Số Lượng: x2</div>
          </div>
          <div class="product__price">
            <span class="product__price-old">₫77.000</span>
            <span class="product__price-new">₫36.000</span>
          </div>
        </div>
        <div class="order-history__item-product">
          <div class="product__image">
            <img
              src="https://cf.shopee.vn/file/587c80d098a9566c5d7496aec10e0cdf_tn"
              alt=""
            />
          </div>
          <div class="product__information">
            <div class="product__information-title">
              Mũ Bảo Hiểm CMR204 Đủ Màu Có Lỗ Thông Gió FreeShip - Sơn Màu Đúng
              Chuẩn - CTY TNHH CAMRY
            </div>
            <div class="product__information-description">
              {{ $t("amount") }}: x2
            </div>
          </div>
          <div class="product__price">
            <span class="product__price-old">₫77.000</span>
            <span class="product__price-new">₫36.000</span>
          </div>
        </div>
        <div class="order-history__item-bottom">
          <div class="order-history__item-action">
            <v-btn large elevation="2">
              {{ $t("update") }}
            </v-btn>
          </div>
          <div class="order-history__item-total">
            {{ $t("the_total_amount") }}: <span>₫80.000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OrderHistory",
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: this.$t("all"),
        },
        {
          id: 2,
          title: this.$t("ordered"),
        },
        {
          id: 3,
          title: this.$t("paid"),
        },
        {
          id: 4,
          title: this.$t("accomplished"),
        },
      ],
      currentTab: 1,
    };
  },
});
</script>

<style lang="scss" scoped>
.order-history {
  &__title {
    font-size: 20px;
    font-weight: 700;
    color: #4b4e55;
    line-height: 29px;
    padding-bottom: 8px;
  }

  &__subtitle {
    font-size: 14px;
    font-weight: 400;
    color: #4b4e55;
    line-height: 21px;
    padding-bottom: 12px;
    border-bottom: 1px solid #d3d2d2;
  }

  &__tab {
    display: flex;
    align-items: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    margin-top: 20px;
    border-radius: 8px;

    &-item {
      margin: 15px 0 15px 20px;
      padding: 8px 16px;
      background-color: #fff;
      color: #103178;
      border-radius: 8px;
      cursor: pointer;
      font-size: 15px;
      line-height: 21px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

      &--active {
        font-weight: 600;
        color: #fff;
        background-color: #103178;
      }

      &:not(:first-of-type) {
        margin-left: 40px;
      }
    }
  }

  &__items {
    padding: 20px 0;
  }

  &__item {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 8px;
    padding: 20px;

    &-top {
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px dotted rgba(0, 0, 0, 0.09);
      padding-bottom: 15px;

      span {
        &:first-of-type {
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          color: #4caf50;
          margin-right: 15px;
          padding-right: 15px;
          border-right: 1px solid #d3d2d2;

          .v-icon {
            margin-right: 5px;
          }
        }

        &:last-of-type {
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
          color: #103178;
        }
      }
    }

    &-product {
      display: flex;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px dotted rgba(0, 0, 0, 0.09);

      .product {
        &__image {
          width: 80px;
          height: 80px;
          margin-right: 20px;

          img {
            width: 80px;
            height: 80px;
            border-radius: 4px;
          }
        }

        &__information {
          width: calc(100% - 250px);
          margin-right: 20px;

          &-title {
            font-size: 15px;
            font-weight: 600;
            line-height: 22px;
            color: #103178;
            margin-bottom: 8px;
          }

          &-description {
            font-size: 14px;
            line-height: 21px;
            color: #103178;
          }
        }

        &__price {
          display: flex;
          justify-content: flex-end;
          width: 220px;
          font-size: 16px;

          &-old {
            text-decoration-line: line-through;
            color: #000;
            opacity: 0.26;
            margin-right: 8px;
          }

          &-new {
            color: #e2240f;
            font-weight: 600;
          }
        }
      }
    }

    &-total {
      display: flex;
      justify-content: flex-end;
      font-size: 18px;
      color: #000;

      span {
        margin-left: 12px;
        color: #e2240f;
        font-weight: 600;
      }
    }

    &-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0 12px;

      .v-btn {
        background-color: #fd8d27;
        color: #fff;
      }
    }
  }
}
</style>
