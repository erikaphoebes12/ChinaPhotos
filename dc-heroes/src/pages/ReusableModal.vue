<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Reusable Modal</h1>
      <!-- Modal 1 -->
      <modal v-if="isModal1Open" @close="isModal1Open = false">
        <template #title >Modal 1</template>
        <template #body>
            <p>This is body of Modal 1</p>
        </template>#
      </modal>
      <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal1Open = true">Red Modal</button>

      <!-- Modal 2 -->
      <modal v-if="isModal2Open" @close="isModal2Open = false">
        <template #title >Modal 2</template>
        <template #body>
            <p>This is the body of Modal 2</p>
        </template>
      </modal>
      <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal2Open = true">Blue Modal</button>

    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);

    return {
      isModal1Open,
      isModal2Open,
    };
  },
};
</script>

<style>
</style>