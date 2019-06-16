<template>
  <b-modal id="playerFormModal" hide-footer>
    <h3>
      <span v-if="!bandEdit">New</span>
      <span v-else>Edit</span>
      Player Form
    </h3>

    <form class="row" v-on:submit.prevent="save()">
      <div class="col-12 mb-2">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="player.name">
      </div>
      <div class="col-12 mb-2">
        <label for="lastname">Last Name</label>
        <input type="text" class="form-control" v-model="player.lastName">
      </div>
      <div class="col-12 mb-2">
        <label for="position">Position</label>
        <select v-model="player.position" class="form-control">
          <option
            :value="position.key"
            v-for="(position, index) in squadNumber"
            :key="index"
          >{{position.label}}</option>
        </select>
      </div>
      <div class="col-12 mb-2">
        <label for="weight">Weight</label>
        <input type="number" class="form-control" v-model="player.weight">
      </div>
      <div class="col-12 mb-2">
        <label for="height">Height</label>
        <input type="number" class="form-control" v-model="player.height">
      </div>
      <div class="col-12 mb-2">
        <label for="nationality">Nationality</label>
        <select v-model="player.nationality" class="form-control">
          <option
            :value="country.key"
            v-for="(country, index) in countries"
            :key="index"
          >{{country.label}}</option>
        </select>
      </div>
      <div class="col-12 mb-2">
        <label for="leftFooted">Left Footed</label>
        <input type="checkbox" class="form-control" v-model="player.leftFooted">
      </div>
    </form>
  </b-modal>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Player, Countries, SquadNumber } from "../interfaces/player";

@Component
export default class PlayerForm extends Vue {
  @Prop() private bandEdit!: string;
  @Prop() private player!: Player;

  countries: any = Object.keys(Countries).map(key => ({
    label: key,
    key: Countries[key]
  }));
  squadNumber = Object.keys(SquadNumber)
    .slice(Object.keys(SquadNumber).length / 2)
    .map(key => ({
      label: key,
      key: SquadNumber[key]
    }));
}
</script>
