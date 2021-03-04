<template>
  <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">Add User</button>
  <teleport to="body">
    <modal v-if="isModalOpen" @close="isModalOpen = false">
      <template>
        <div #title>
          <h1>Add New User</h1>
        </div>
      </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label for="name">Name</label>
            <input
              class="w-full p-2 rounded border"
              name="name"
              v-bind="state.form.name"
              type="text"
              placeholder="User Name"
            >
          </div>
          <div class="p-2">
            <label for="email">Email</label>
            <input
              class="w-full p-2 rounded border"
              name="email"
              v-bind="state.form.email"
              type="email"
              placeholder="User Email"
            >
          </div>
          <div class="p-2">
            <label for="avatar">Avatar</label>
            <input
              class="w-full p-2 rounded border"
              name="avatar"
              v-bind="state.form.avatar"
              type="url"
              placeholder="Avatar URL"
            >
          </div>
          <div class="p-2">
            <label for="avatar">Avatar</label>
            <input class="w-full p-2 rounded border hover:bg-gray-300" type="submit" value="Create">
          </div>
        </form>
      </template>
    </modal>
  </teleport>
</template>

<script>
import { ref, reactive } from "vue";
import Modal from "../Modal";
import axios from "../../plugins/axios";

export default {
  components: {
    Modal,
  },

  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: ""
      }
    });
    //form function submit
    async function submit() {
      const { data } = await axios.post("/users", state.form);
      emit("new-user-added", data);
      state.form.email = "";
      state.form.name = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }
    return {
      state,
      isModalOpen,
      submit
    };
  }
};
</script>