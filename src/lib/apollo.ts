import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4opb3v50lbe01xxgg96b2ie/master",
  cache: new InMemoryCache(),
});
