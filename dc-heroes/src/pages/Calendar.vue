<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold mx-2">{{ currentYear }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth(currentYear, currentMonth)"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 border rounded" @click="prev">Prev</button>
      <button class="px-2 border rounded" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },

    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },

    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },

    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },

    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();

      return calendarFullDate === currentFullDate ? "text-blue-600" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>