import { useQuery } from "@apollo/client";
import constant from "./constant";
import Query from "../graphql/Query";

export const CheckLogin = () => {
  const { data } = useQuery(Query.userDetail);
  const isLogin = !!data?.userDetail || !!localStorage.getItem(constant.prfUserToken);
  // const isLogin = !!data?.userDetail

  return isLogin
};
