<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ heroesCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeroes"
        :key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button class="" @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        type="text"
        name="newHero"
        id="newHero"
        v-model.lazy="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRefs"
      />
      <button
        class="border rounded bg-gradient-to-t from-red-700 to-pink-500 text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    heroesCount() {
      return this.dcHeroes.length;
    },
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeroes.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeroes = this.dcHeroes.filter((hero, i) => i != index);
    },
  },
  mounted() {
    this.$refs.newHeroRefs.focus();
  },
  data() {
    return {
      newHero: "",
      dcHeroes: [],
    };
  },
};
</script>