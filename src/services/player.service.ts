import firebase from "firebase";
import { Player } from "@/interfaces/player";

class PlayerService {
  private playersDb: Player[];
  constructor() {
    this.playersDb = [];
  }

  public getPlayers(): Player[] {
    return this.playersDb;
  }

  public getFromFirebase(): void {
    let valueReturn: Player[];
    const instance = firebase.database().ref("players");
    instance.once("value").then(snapshot => {
      this.playersDb = snapshot.val();
    });
  }
}

export const playerService = new PlayerService();
