<template>
  <div class="signup"></div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSignup() {
      // vuex
      let email = this.email;
      let password = this.password;
      console.log({ email, password });
    }
  }
};
</script>

<style></style>
