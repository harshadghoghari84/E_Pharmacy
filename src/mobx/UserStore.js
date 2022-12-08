import "mobx-react/batchingForReactDom";
import { observable, action, makeAutoObservable } from "mobx";
import Query from "../graphql/Query";
import ApolloClient from "../utils/ApolloClient";

class UserStore {
  user = null;
  userBillingData = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadUserBillingDetails = () => {
    ApolloClient.query({
      query: Query.userDetail,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    })
      .then(({ data, error }) => {
        if (data) {
          this.userBillingData = data?.userDetail?.billing_detail;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  setUser = (user) => {
    // console.log("--user-->", user);
    this.user = user;
  };

  setUserBillingData = (billingData) => {
    this.userBillingData = billingData
  }
}

export default new UserStore();
