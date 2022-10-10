<template>
  <div class="country">
    <div class="country__box" @click="isShowDialog = true">
      <span class="country__title">{{ currentLocation.title }}</span>
      <flag class="country__flag" :iso="currentLocation.country" />
    </div>
    <v-dialog
      transition="dialog-bottom-transition"
      width="400"
      v-model="isShowDialog"
      persistent
    >
      <template v-slot:default="isShowDialog">
        <v-card>
          <v-card-title>{{ $t("select_language") }}</v-card-title>
          <v-card-text>
            <div class="country__select">
              <div
                class="country__select-item"
                v-for="item in location"
                :key="item.title"
              >
                <v-chip
                  class="ma-2"
                  color="#103178"
                  outlined
                  @click="handleSelectLocate(item)"
                >
                  {{ item.title }}
                  <flag :iso="item.country" class="country__select-item-flag" />
                </v-chip>
              </div>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              @click="isShowDialog.value = false"
              color="#103178"
              outlined
              light
              >{{ $t("close") }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { App } from "@/types/app";
import { changeLocate } from "@/plugins/i18n";

export default Vue.extend({
  name: "TheCountry",
  components: {},
  data() {
    return {
      isShowDialog: false,
      location: [
        {
          title: "English",
          country: "gb",
          locate: "en",
        },
        {
          title: "Việt Nam",
          country: "vn",
          locate: "vi",
        },
      ],
      currentLocation: {
        title: "English",
        country: "gb",
        locate: "en",
      },
    };
  },
  methods: {
    handleSelectLocate(location: App.LocationApp): void {
      this.currentLocation = location;
      changeLocate(location.locate);
      this.isShowDialog = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.country {
  &__box {
    cursor: pointer;
    padding: 5px 10px;
    box-shadow: 1px 1px 3px rgb(0 0 0 / 40%);
    margin: 5px 10px;
    border-radius: 20px;
    border: 1px solid #103178;
    max-width: 102px;
    display: flex;
    justify-content: center;
  }

  &__title {
    margin-right: 5px;
    font-weight: 600;
    line-height: 19px;
    font-size: 13px;
    color: #103178;
  }

  &__select {
    display: flex;
    align-items: center;
    justify-content: center;

    &-item {
      .v-chip {
        cursor: pointer;
      }

      &-flag {
        margin-left: 5px;
      }
    }
  }
}

::v-deep {
  .v-card__title {
    color: #103178;
    font-size: 30px !important;
    font-weight: 600 !important;
    margin: 0 auto 25px;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 1265px) {
  .country {
    &__box {
      padding: 9px 5px;
      margin: 8px 2px;
    }

    &__title {
      line-height: 12px;
      font-size: 12px;
    }

    &__flag {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
