import { RootStore } from "@stores";
import { action, observable, runInAction } from "mobx";
import axios from "axios";

export interface IDataItem {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  photoUrl: string;
}

export default class DataStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable data: IDataItem[] = [];
  @observable initialized: boolean = false;

  @action sync = async () => {
    const data = await Promise.all(
      Array.from({ length: 5 }, async (_, i) => {
        const user = (await axios.get("https://randomuser.me/api/")).data
          .results[0];
        return {
          id: i,
          name: user.name.first + " " + user.name.last,
          title: user.gender,
          subtitle: user.location.country + " " + user.location.city,
          photoUrl: user.picture.medium,
        };
      })
    );

    runInAction(() => {
      this.data = data;
      this.initialized = true;
    });
  };
}
