<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <simple-calculator msg="Simple Calculator"/>
    <modern-calculator msg="Modern Calculator"/>
  </div>
</template>

<script>
import SimpleCalculator from './components/SimpleCalculator.vue'
import ModernCalculator from './components/ModernCalculator.vue'

export default {
  name: 'App',
  components: {
    SimpleCalculator, 
    ModernCalculator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
