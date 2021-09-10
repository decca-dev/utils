import express, { Request, Response } from "express";
import { config } from "dotenv";
import { connect, set } from "mongoose";

import Logger from "./utils/Logger";
import routes from "./routes/index";

config();
const app = express();
const PORT = 8080;

connect(`${process.env.MONGO_URI}`)
  .then(() => {
    Logger.info("Connected to mongoose successfully!", "DATABASE");
  })
  .catch((err) => {
    Logger.error(`${err.message}`, "DATABASE");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello");
});

app.use("/api", routes);

app.listen(PORT, () => Logger.info(`Started on port ${PORT}`, "server"));
