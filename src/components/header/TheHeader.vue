<template>
  <div class="header">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" sm="3" md="3" lg="3" class="pa-0">
          <v-img
            class="header__logo"
            :src="require('@/assets/images/logo/logo.png')"
            contain
            alt="logo"
            height="54"
          />
        </v-col>
        <v-col cols="12" sm="5" md="5" lg="5" class="pa-0">
          <div class="header__search mt-5">
            <v-text-field
              :placeholder="$t('search')"
              rounded
              clearable
              dense
              solo
              height="46"
            >
              <template v-slot:append>
                <v-icon @click.prevent="" color="#103178"> mdi-magnify </v-icon>
              </template>
            </v-text-field>
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4">
          <v-row>
            <v-col cols="5" sm="5" md="5" lg="5">
              <TheCountry />
            </v-col>
            <v-col cols="7" sm="7" md="7" lg="7">
              <TheSetting />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheCountry from "./TheCountry.vue";
import TheSetting from "./TheSetting.vue";

export default Vue.extend({
  name: "TheHeader",
  components: { TheCountry, TheSetting },
});
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 2px solid #f0f2f5;

  &__logo {
    width: 216px;
    cursor: pointer;
  }
}

::v-deep {
  .v-input__slot {
    background-color: #f0f2f5 !important;
  }

  .theme--light.v-input input {
    color: #5b6c8f !important;
  }

  @media screen and (max-width: 1265px) {
    .v-input__slot {
      height: 40px !important;
    }
  }
}

@media screen and (max-width: 1265px) {
  .header {
    &__logo {
      width: 180px;
    }
  }
}
</style>
