import { ApolloServer } from "apollo-server-express";
import { querySchema } from "../graphql/schema/query.js";
import { resolve } from "../graphql/resolve/resolve.js";

export const GraphQlConnection = async (app) => {
  const server = new ApolloServer({
    typeDefs: querySchema,
    resolvers: resolve,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
};
