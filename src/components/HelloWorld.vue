<template>
  <div class="hello">
    <h1 class="text-center">{{ helloMsg }}</h1>

    <img
      v-bind:src="object.image"
      v-bind:alt="object.name"
      class="mx-auto d-block"
      :title="object.name"
    >
    <h3 class="text-center">{{object.name}}</h3>

    <button class="btn btn-primary d-block mx-auto" @click="pedirPersonaje()">Pedir personaje</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PlayerService } from "../services/player.service";
import { Player } from "../interfaces/player";
import { Team } from "../interfaces/team";
import firebase from "firebase";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  helloMsg: string = "Hello";
  count: number = 0;
  object: object = {};
  players: Player[] = [];
  teams: Team[] = [];

  created() {
    this.getPlayers();
    this.getTeams();
  }

  getPlayers(): void {
    let instance = firebase.database().ref("players");
    instance.once("value").then(snapshot => {
      this.players = snapshot.val();
    });
  }

  getTeams(): void {
    let instance = firebase.database().ref("teams");
    instance.once("value").then(snapshot => {
      this.teams = snapshot.val();
    });
  }

  sumar(): void {
    this.count++;
  }
  restar(): void {
    this.count > 0 ? this.count-- : false;
  }

  pedirPersonaje(): void {
    let random: number = Math.floor(Math.random() * (20 - 1) + 1);
    this.$http({
      url: "https://rickandmortyapi.com/api/character/" + random
    }).then(response => {
      this.object = response.data;
    });
  }
}
</script>
