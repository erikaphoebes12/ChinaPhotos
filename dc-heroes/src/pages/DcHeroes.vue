<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ heroesCount }}</h1>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        type="text"
        name="newHero"
        id="newHero"
        v-model.lazy="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-t from-red-700 to-pink-500 text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
    <ul class="my-4">
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeroes"
        :key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button class="" @click="remove(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue"

export default {
  setup() {
    const newHeroRef = ref("")
    const newHero = ref("")
    const dcHeroes = ref([])

    onMounted(() => {
      newHeroRef.value.focus();
    })

    function addHero() {
      if (newHero.value !== "") {
        dcHeroes.value.push({ name: newHero.value });
        newHero.value = "";
      }
    }

    function remove(index) {
      dcHeroes.value = dcHeroes.value.filter((hero, i) => i != index);
    }

    const heroesCount = computed({
      get: () => dcHeroes.value.length,
    }) 

    return { dcHeroes, newHero, remove, addHero, newHeroRef, heroesCount };
  },
  
  data() {
    return {};
  },
};
</script>