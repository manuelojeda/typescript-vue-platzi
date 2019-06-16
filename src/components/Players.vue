<template>
  <div class="row">
    <div class="col-12">
      <h1>Players</h1>

      <button class="btn mb-3" @click="showForm()" v-b-modal.playerFormModal>Add player</button>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Nationality</th>
              <th>Left Footed</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr v-for="(player, index) in players" v-bind:key="index">
              <td>{{player.name}}</td>
              <td>{{player.lastName}}</td>
              <td>{{player.position}}</td>
              <td>{{player.weight}}</td>
              <td>{{player.height}}</td>
              <td>{{player.nationality}}</td>
              <td>{{player.leftFooted}}</td>
              <td>
                <button @click="showForm(true, player)" v-b-modal.playerFormModal>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <PlayerForm :band-edit="bandEdit" :player="player"></PlayerForm>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Player } from "../interfaces/player";
import firebase from "firebase";
import { playerService } from "../services/player.service";
import PlayerForm from "./PlayerForm.vue";

@Component({
  components: {
    PlayerForm
  }
})
export default class Players extends Vue {
  players: Player[] = [];
  player: Player = {
    name: "",
    lastname: "",
    position: null,
    weight: 0,
    height: 0,
    nationality: null,
    leftFooted: null
  };
  bandEdit: boolean = false;

  created() {
    playerService.getFromFirebase();
    this.$http
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {})
      .then(() => {
        this.players = playerService.getPlayers();
      });
  }

  showForm(edit = false, player: Player) {
    this.bandEdit = edit;

    if (player) {
      this.player = player;
    } else {
      this.player = {
        name: "",
        lastname: "",
        position: null,
        weight: 0,
        height: 0,
        nationality: null,
        leftFooted: null
      };
    }
  }

  save() {}
}
</script>
