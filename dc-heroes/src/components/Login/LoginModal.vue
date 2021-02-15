<template>
  <div>
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
          <div class="p-2 border">
            <h1 class="text-xl text-center">Login</h1>
            <GoogleLogin @close-login-from-google="close" />
            <p class="my-3 text-center">Or</p>
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label for="email">Email or Username</label>
                <input
                  class="rounded shadow p-2 w-full"
                  v-model="email"
                  type="text"
                  name="email"
                  id="email"
                  ref="emailRef"
                  placeholder="Enter your email or username"
                />
              </div>
              <div class="my-4">
                <label for="password">Password</label>
                <input
                  class="rounded shadow p-2 w-full"
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>Loading... </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../utilities/firebase";
import GoogleLogin from "./GoogleLogin";

export default {
  name: "LoginModal",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },

  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },

    close() {
      this.$emit("close-login");
    },
  },
};
</script>

<style>
</style>