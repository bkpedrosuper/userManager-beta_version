<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Main,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(2, 51, 2);
  width: 100%;
}
</style>

<style>
*{margin: 0;padding: 0;outline: 0;box-sizing: border-box;}
</style>