<template>
  <div class="flex flex-wrap w-full relative">
    <div v-for="(color, index) in sliders" :key="color" class="absolute w-full">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider" 
          @click="makeActive(index)"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md" :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 rounded border"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-green-600"],
      interval: "",
      isTitleShowing: true,
    };
  },
  methods: {
      makeActive(index) {
          this.currentSlide = index;
      }
  },
  mounted() {
    setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 1000);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(2100%);
}
</style>