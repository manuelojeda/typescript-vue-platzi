<template>
  <div id="app" class="container">
    <Players></Players>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Players from "./components/Players.vue";

@Component({
  components: {
    Players
  }
})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
