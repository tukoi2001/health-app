<template>
  <div class="main-contact" @click.self="isActive = false">
    <div class="main-contact__box" @click="isActive = !isActive">
      <v-icon color="#103178" size="50">mdi-mail</v-icon>
    </div>
    <div class="main-contact__form" v-if="isActive">
      <div class="main-contact__form-title">{{ $t("send_us_a_message") }}</div>
      <v-form @submit.prevent="" v-model="isValid">
        <template>
          <v-text-field
            dense
            solo
            rounded
            id="fullName"
            height="45"
            name="fullName"
            background-color="#fff"
            flat
            :label="$t('full_name')"
            placeholder="David Backer"
            v-model="formData.fullName"
            :rules="[rules.required]"
          />
        </template>
        <template>
          <v-text-field
            dense
            solo
            rounded
            background-color="#fff"
            id="email"
            height="45"
            name="email"
            :label="$t('email')"
            placeholder="abc@demo.com"
            v-model="formData.email"
            :rules="[rules.required, rules.email]"
          />
        </template>
        <template>
          <v-text-field
            dense
            solo
            background-color="#fff"
            rounded
            id="phoneNumber"
            height="45"
            name="phoneNumber"
            :label="$t('phone_number')"
            placeholder="0393212921"
            v-model="formData.phone"
            :rules="[rules.required]"
          />
        </template>
        <template>
          <v-textarea
            solo
            name="message"
            rounded
            no-resize
            :label="$t('messages')"
            rows="4"
            v-model="formData.message"
          />
        </template>
        <v-btn type="submit" rounded color="#fd8d27">
          {{ $t("submit") }}
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainContact",
  data() {
    return {
      formData: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
      },
      isValid: false,
      isActive: true,
      rules: {
        required: (value: string) => !!value || this.$t("required"),
        min: (v: string) => v.length >= 8 || this.$t("least_characters"),
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t("invalid_email");
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.main-contact {
  background-image: url("@/assets/images/contact-us/banner.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 700px;
  margin: 10px 0 20px;
  position: relative;

  &__box {
    background-color: #fff;
    animation: phoning-alo-circle-fill-anim 2.3s infinite ease-in-out;
    cursor: pointer;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: 50% 50%;
    position: absolute;
    top: 40px;
    left: 140px;
  }

  &__form {
    width: 450px;
    position: absolute;
    top: 120px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 30px 50px;
    border-radius: 8px;
    left: 120px;
    background-color: rgba(255, 255, 255, 0.5);

    &-title {
      font-size: 30px;
      color: #403866;
      font-weight: 700;
      line-height: 1.2;
      text-transform: uppercase;
      text-align: center;
      padding-bottom: 40px;
    }

    &:before {
      content: "";
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid rgba(255, 255, 255, 0.5);
      position: absolute;
      top: -15px;
      left: 40px;
    }
  }
}

@-webkit-keyframes phoning-alo-circle-fill-anim {
  0% {
    -webkit-transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.6;
  }
  50% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.6;
  }
  100% {
    -webkit-transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.6;
  }
}

::v-deep {
  .v-text-field__slot {
    label {
      font-weight: 400;
      font-size: 14px;
      color: #333;
    }

    input,
    textarea {
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
  }

  .v-btn__content {
    text-transform: capitalize;
    color: #fff;
    font-weight: 600;
  }
}
</style>
