import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
});

Vue.component('button-counter', {
  data(){
    return {
      count: 0,
    }
  },
  template: '<button v-on:click="count++">You Click me {{count}} times.</button>'
});
vm.$mount("#app");
