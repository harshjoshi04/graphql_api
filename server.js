import express from "express";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQlConnection } from "./config/graphQLConnection.js";
import { DbConnection } from "./config/dbConnection.js";
import userRouter from "./router/user.route.js";
import bookRouter from "./router/book.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// graphQl

GraphQlConnection(app);
// app.use("/graphQl", GraphQlConnection);
app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/user", userRouter);
app.use("/book", bookRouter);

DbConnection().then(() => {
  app.listen(8000, () => {
    console.log("Server Start At 8000");
  });
});
