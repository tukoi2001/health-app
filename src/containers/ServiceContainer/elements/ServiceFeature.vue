<template>
  <div class="service-feature">
    <v-container>
      <div class="service-feature__wrapper">
        <div v-for="item in items" :key="item.id" class="service-feature__item">
          <div
            class="service-feature__item-icon"
            :style="{ 'background-color': item.color }"
          >
            <component :is="item.icon" />
          </div>
          <div class="service-feature__item-title">
            {{ item.title }}
            <div class="service-feature__item-description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChartFill from "@/components/ui/ChartFill.vue";
import CategoryFill from "@/components/ui/CategoryFill.vue";
import RadaFill from "@/components/ui/RadaFill.vue";

export default Vue.extend({
  name: "ServiceFeature",
  components: {
    ChartFill,
    CategoryFill,
    RadaFill,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Project Management",
          description:
            "We’re design-focused across every touchpoint or interaction",
          icon: "CategoryFill",
          color: "#377cfd1a",
        },
        {
          id: 2,
          title: "Centralized Workflows",
          description:
            "We’re design-focused across every touchpoint or interaction",
          icon: "RadaFill",
          color: "#fd4c5c1a",
        },
        {
          id: 3,
          title: "Digital Marketing",
          description:
            "We’re design-focused across every touchpoint or interaction",
          icon: "ChartFill",
          color: "#00ba981a",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.service-feature {
  padding-top: 100px;

  &__wrapper {
    @include flexBox();
    gap: 30px;
  }

  &__item {
    @include flexBox(center, flex-start);
    gap: 20px;
    padding: 30px;
    border: 1px solid $border-grey;
    border-radius: 20px;

    &-title {
      @include headline3();
      color: $text-primary;
    }

    &-description {
      @include paragraph3();
      color: $text-normal;
      margin-top: 15px;
    }

    &-icon {
      @include flexBox();
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
