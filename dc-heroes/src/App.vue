<template>
  <div>
    <the-header @open-login-modal="isLoginOpen = true" :isLoggedIn="isLoggedIn" />
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <login-modal v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import LoginModal from './components/Login/LoginModal'
import firebase from './utilities/firebase'

export default {
  name: "App",
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.isLoggedIn = true;
    this.authUser = user;
  } else {
    // No user is signed in.
    this.isLoggedIn = false;
    this.authUser = {};
  }
});
  },
  components: {
    TheHeader,
    LoginModal
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
