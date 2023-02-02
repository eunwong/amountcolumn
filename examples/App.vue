<template>
  <div id="app">
    <AmountColumn v-model="val" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      val: 0
    };
  },
  watch: {
    val: {
      handler(v) {
        console.log(v);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 300px;
  height: 90px;
}
</style>
