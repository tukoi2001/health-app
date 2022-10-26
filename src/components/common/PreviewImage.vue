<template>
  <div class="preview-image">
    <div class="preview-image__box">
      <div class="preview-image__title">{{ $t("image_preview") }}</div>
      <div class="preview-image__box-image">
        <img :src="imageUrl" alt="image-preview" />
      </div>
      <div class="preview-image__box-action">
        <v-btn
          elevation="2"
          plain
          small
          class="btn btn--default"
          @click="handleUnUploadFile"
          >{{ $t("cancel") }}</v-btn
        >
        <v-btn
          elevation="2"
          plain
          small
          class="btn btn--primary ml-3"
          @click="handleChangeAvatar"
          >{{ $t("save") }}</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PreviewImage",
  props: {
    file: {
      type: File,
    },
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  created(): void {
    this.handlePreviewImage();
  },
  methods: {
    handlePreviewImage(): void {
      const url = URL.createObjectURL(this.file);
      this.imageUrl = url;
    },
    handleRemoveImage(): void {
      URL.revokeObjectURL(this.imageUrl);
    },
    handleUnUploadFile(): void {
      this.$emit("unUpload");
    },
    handleChangeAvatar(): void {
      // Todo: Handle change avatar
      this.handleUnUploadFile();
    },
  },
  destroyed(): void {
    this.handleRemoveImage();
  },
});
</script>

<style lang="scss" scoped>
.preview-image {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(206, 202, 202, 0.7);
  z-index: 9999;

  &__title {
    font-size: 16px;
    font-weight: 600;
    color: #383a3d;
    line-height: 21px;
    margin-bottom: 12px;
  }

  &__box {
    width: 400px;
    height: 485px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;

    &-image {
      width: 360px;
      height: 360px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid rgb(237, 237, 237);
      }
    }

    &-action {
      margin-top: 20px;

      .btn {
        &--default {
          background-color: rgb(239, 236, 236) !important;
        }
      }
    }
  }
}

::v-deep {
  .v-btn__content {
    color: #333 !important;
  }
}
</style>
