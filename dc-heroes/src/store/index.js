import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      isLoggedIn: false,
      authUser: {},
    }
  },
  mutations: {
    setIsLoggedIn (state, payload) {
      state.isLoggedIn = payload;
    },
    setAuthUser (state, payload) {
      state.authUser = payload;
    }
  }
})

export default store;