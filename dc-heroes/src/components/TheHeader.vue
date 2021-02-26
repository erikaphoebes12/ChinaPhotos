<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      class="mx-2"
      >{{ item.title }}</router-link
    >
    <button v-if="store.isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";

export default {
  // replaced by Vuex 4 isLoggedIn property
  /* props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  }, */
  data() {
    return {
      list: [
        { title: "Dc Heroes", to: "/dc-heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reusable-modal" },
        { title: "Chat", to: "/chat" },
      ],
    };
  },

  computed: {
    //data imported using Vuex 4
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>