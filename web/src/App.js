import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Layout from "./components/Layout.js";
import Pages from "./pages";

const uri = "http://localhost:4000/api";
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
