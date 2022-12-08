import { makeAutoObservable } from "mobx";
import "mobx-react/batchingForReactDom";
import Query from "../graphql/Query";
import ApolloClient from "../utils/ApolloClient";
class GlobalStore {
  AllCatagory = [];
  subCatagoryId = null;
  catLoading = false;
  selectedProductQty = [];
  cartData = [];
  checkOutData = [];
  countryList = [];
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
    this.subCatagoryId = id;
  };

  setSelectProductQty = (id, qty) => {
    if (this.selectedProductQty.length > 0) {
      const filterArray = this.selectedProductQty.filter(
        (ele) => ele.medicineId !== id
      );
      this.selectedProductQty = [...filterArray, { medicineId: id, qty: qty }];
    } else {
      this.selectedProductQty = [
        ...this.selectedProductQty,
        { medicineId: id, qty: qty },
      ];
    }
  };

  setCartData = (data) => {
    this.cartData = [...this.cartData, data];
  };
  setCheckOutData = (data) => {
    this.checkOutData = data;
  };
  setCountryList = (data) => {
    this.countryList = data;
  };
}

export default new GlobalStore();
