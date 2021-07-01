<template>
  <div id="app">
    <TheHeader />
    <ContentFrame />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ContentFrame from './components/ContentFrame.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    ContentFrame,
    TheFooter
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #2c3e50;
}
</style>
