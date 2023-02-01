import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import constant from "../utils/constant";
import Constant from "../utils/constant";

const httpLink = createHttpLink({
  uri: constant.serverUrl,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await localStorage.getItem(Constant.prfUserToken);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
