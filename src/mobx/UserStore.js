import "mobx-react/batchingForReactDom";
import { observable, action, makeAutoObservable } from "mobx";

class UserStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  setUser = (user) => {
    console.log("--user-->", user);
    this.user = user;
  };
}

export default new UserStore();
