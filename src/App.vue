<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      {{ message }}
      <button-counter></button-counter>
      <component-a></component-a>
      <component-b></component-b>
      <component-c></component-c>
      <component :is="componentName" />
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import componentA from './components/componentA';
import componentB from './components/componentB';
import componentC from './components/componentC';

export default {
  data() {
    return {
      message: "hello App",
      componentName: "shuai"
    };
  },
  components: {
    componentA,
    componentB,
    componentC,
  }
};
</script>
