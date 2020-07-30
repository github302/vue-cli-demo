<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DirectiveComp />
  </div>
</template>

<script>
// @ is an alias to /src
import DirectiveComp from '../components/HelloWorld';
export default {
  name: "home",
  components: {
    DirectiveComp,
  }
};
</script>
