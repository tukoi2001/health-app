<template>
  <div class="update-address">
    <div class="update-address__title">{{ $t("update_address") }}</div>
    <div class="update-address__subtitle">
      {{ $t("update_address_hint_text") }}
    </div>
    <v-form @submit.prevent="" v-model="isValid">
      <v-row class="update-address__box">
        <v-col cols="6" class="py-0">
          <div class="update-address__item">
            <template>
              <label class="update-address__item-label" for="city"
                >{{ $t("city") }}:</label
              >
              <v-text-field
                v-model="formData.city"
                :placeholder="$t('city')"
                :label="$t('city')"
                :rules="[rules.required, rules.min]"
                name="city"
                id="city"
                :disabled="!isEdit"
                dense
                outlined
              />
            </template>
            <div class="update-address__item--active">
              <v-icon v-if="isEdit" size="16" color="success">
                mdi-pencil
              </v-icon>
            </div>
          </div>
        </v-col>
        <v-col cols="6" class="py-0">
          <div class="update-address__item">
            <template>
              <label class="update-address__item-label" for="district"
                >{{ $t("district") }}:</label
              >
              <v-text-field
                v-model="formData.district"
                :placeholder="$t('district')"
                :label="$t('district')"
                :rules="[rules.required, rules.min]"
                name="district"
                id="district"
                :disabled="!isEdit"
                dense
                outlined
              />
            </template>
            <div class="update-address__item--active">
              <v-icon v-if="isEdit" size="16" color="success">
                mdi-pencil
              </v-icon>
            </div>
          </div>
        </v-col>
        <v-col cols="6" class="py-0">
          <div class="update-address__item">
            <template>
              <label class="update-address__item-label" for="ward"
                >{{ $t("ward") }}:</label
              >
              <v-text-field
                v-model="formData.ward"
                :placeholder="$t('ward')"
                :label="$t('ward')"
                :rules="[rules.required, rules.min]"
                name="ward"
                id="ward"
                :disabled="!isEdit"
                dense
                outlined
              />
            </template>
            <div class="update-address__item--active">
              <v-icon v-if="isEdit" size="16" color="success">
                mdi-pencil
              </v-icon>
            </div>
          </div>
        </v-col>
        <v-col cols="6" class="py-0">
          <div class="update-address__item">
            <template>
              <label class="update-address__item-label" for="street"
                >{{ $t("street") }}:</label
              >
              <v-text-field
                v-model="formData.street"
                :placeholder="$t('street')"
                :label="$t('street')"
                :rules="[rules.required, rules.min]"
                name="street"
                id="street"
                :disabled="!isEdit"
                dense
                outlined
              />
            </template>
            <div class="update-address__item--active">
              <v-icon v-if="isEdit" size="16" color="success">
                mdi-pencil
              </v-icon>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="py-0">
          <div class="update-address__item">
            <template>
              <label class="update-address__item-label" for="specific_address"
                >{{ $t("specific_address") }}:</label
              >
              <v-text-field
                v-model="formData.specificAddress"
                :placeholder="$t('specific_address')"
                :label="$t('specific_address')"
                name="specific_address"
                id="specific_address"
                :disabled="!isEdit"
                dense
                outlined
              />
            </template>
            <div class="update-address__item--active">
              <v-icon v-if="isEdit" size="16" color="success">
                mdi-pencil
              </v-icon>
            </div>
          </div>
        </v-col>
        <div class="update-address__action">
          <v-btn elevation="2" plain small @click="handleChangeInfo">
            <v-icon v-if="isEdit" size="16"> mdi-pencil </v-icon
            >{{ titleAction }}</v-btn
          >
        </div>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UpdateAddress",
  data() {
    return {
      formData: {
        city: "",
        district: "",
        ward: "",
        street: "",
        specificAddress: "",
      },
      isEdit: false,
      isValid: true,
      rules: {
        required: (value: string) => !!value || this.$t("required"),
        min: (v: string) => v.length >= 8 || this.$t("least_characters"),
      },
    };
  },
  computed: {
    titleAction() {
      if (this.isEdit) {
        return this.$t("edit");
      } else {
        return this.$t("save");
      }
    },
  },
  methods: {
    handleChangeInfo(): void {
      if (this.isEdit) {
        this.isEdit = false;
      } else {
        // Todo: Update information
        this.isEdit = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.update-address {
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

  &__box {
    padding: 20px 0;
  }

  &__item {
    position: relative;
    padding: 0 10px;

    &-label {
      font-size: 15px;
      font-weight: 600;
      color: #252729;
      line-height: 21px;
    }

    &--active {
      position: absolute;
      right: -10px;
      top: 35px;
    }
  }

  &__action {
    margin: 8px 0 0 22px;
  }
}

::v-deep {
  .v-text-field {
    margin-top: 8px;

    &__details {
      margin-bottom: 0 !important;
    }

    &__slot {
      .v-label {
        font-size: 14px;
        color: #383a3d;
        line-height: 21px;
      }

      input {
        font-size: 14px;
        font-weight: 600;
        color: #383a3d;
        line-height: 21px;
      }
    }
  }

  .v-btn {
    height: 32px !important;
    background-color: #fd8d27;

    &__content {
      font-size: 14px;
      color: #fff;
      font-weight: 600;
      text-transform: none;

      .v-icon {
        margin-right: 8px;
      }
    }
  }
}
</style>
