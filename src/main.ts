import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loadScript from './cloud';
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
});

Vue.component("button-counter", {
  data() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You Click me {{count}} times.</button>'
});
Vue.component(name, resolve => {
    loadScript('http://localhost:3000/static/js/goods-detail__v2.495932d1.js')
    .then(() => {
      // eslint-disable-next-line
      console.log(window['mallCloud']); // eslint-disable-line
      return Promise.resolve();
    }).then(() => {
      // eslint-disable-next-line
      const com = window['mallCloud']['srcDemoText']; // eslint-disable-line
      if (com) {
        com.disableStore = true;
        resolve(com);
      } else {
        resolve({ template: '<div />' });
      }
    })
    .catch(() => {
      resolve({ template: '<div />' });
    }).then(() => {
      console.log(Vue.component)
    })
});
vm.$mount("#app");
