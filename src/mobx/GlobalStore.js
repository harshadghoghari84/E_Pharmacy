import { makeAutoObservable } from "mobx";
import "mobx-react/batchingForReactDom";
import Query from "../graphql/Query";
import ApolloClient from "../utils/ApolloClient";
class GlobalStore {
  AllCatagory = [];
  subCatagoryId = null;
  catLoading = false;
  constructor() {
    makeAutoObservable(this);
  }
  loadAllCatagory = () => {
    this.catLoading = true;
    ApolloClient.query({
      query: Query.navBarCatagory,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    })
      .then(({ data, error }) => {
        this.catLoading = false;

        if (data) {
          this.AllCatagory = data?.allCategories;
        }
      })
      .catch((error) => {
        this.catLoading = false;
        console.error(error);
      });
  };

  setSubCatagoryId = (id) => {
    console.log("ID--", id);
    this.subCatagoryId = id;
  };
}

export default new GlobalStore();
