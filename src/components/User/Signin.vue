<template>
  <div class="signin"></div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSignin() {
      let email = this.email,
        password = this.password;
      console.table({ email, password });
    }
  }
};
</script>

<style></style>
