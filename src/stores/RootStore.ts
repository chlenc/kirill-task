import { SettingsStore, RouterStore } from "./index";
import DataStore from "@stores/DataStore";
import { computed } from "mobx";

export default class RootStore {
  public dataStore: DataStore;
  public routerStore: RouterStore;

  constructor(initState?: any) {
    this.dataStore = new SettingsStore(this);
    this.routerStore = new RouterStore(this);
    Promise.all([this.dataStore.sync()]).then();
    console.log(this);
  }

  @computed get initialized() {
    return this.dataStore.initialized;
  }
}
