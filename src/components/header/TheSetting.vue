<template>
  <div class="setting">
    <div class="setting-account">
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <v-icon color="#103178" dense large v-if="true">
              mdi-account-cog-outline
            </v-icon>
            <v-avatar size="32px" v-else>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
        </template>
        <div class="setting-account__wrap">
          <v-list>
            <v-list-item>
              <v-list-item-title>Abc</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-menu>
    </div>
    <div class="setting-account">
      <v-badge content="2" value="2" overlap>
        <v-icon color="#103178" dense large v-if="true">
          mdi-heart-plus-outline
        </v-icon>
      </v-badge>
    </div>
    <div class="setting-account">
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-badge content="2" value="2" overlap v-bind="attrs" v-on="on">
            <v-icon color="#103178" v-bind="attrs" v-on="on" dense large>
              mdi-cart-plus
            </v-icon>
          </v-badge>
        </template>
        <v-card class="mx-auto my-12" max-width="500">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TheSetting",
});
</script>

<style lang="scss" scoped>
.setting {
  border-left: 3px solid #103178;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  &-account {
    cursor: pointer;
  }
}

@media screen and (max-width: 1265px) {
  .setting {
    padding: 0 13px;

    &-account {
      .v-badge i {
        font-size: 25px !important;
      }

      i {
        font-size: 28px !important;
      }
    }
  }
}
</style>
