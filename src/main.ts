import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";
import VueBootstrap from "bootstrap-vue";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyDTrcbYabLQ0cradfI8MlMXcmUdTUkVftw",
  authDomain: "typescript-platzi-92798.firebaseapp.com",
  databaseURL: "https://typescript-platzi-92798.firebaseio.com",
  projectId: "typescript-platzi-92798",
  storageBucket: "typescript-platzi-92798.appspot.com",
  messagingSenderId: "741221664395",
  appId: "1:741221664395:web:da0f388ff7c34816"
};

Vue.use(VueAxios, axios);
Vue.use(VueBootstrap);
firebase.initializeApp(config);

new Vue({
  render: h => h(App)
}).$mount("#app");
