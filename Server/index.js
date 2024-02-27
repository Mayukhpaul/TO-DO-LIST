require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

import ConnectDB from "./database/connection";

import Task from "./Api/Tasks";

const todo = express();

todo.use(express.json());
todo.use(express.urlencoded({ extended: false }));
todo.use(helmet());
todo.use(cors());

todo.use("/task",Task);

todo.get("/", (req, res) => res.json({ message: "Setup done" }));

todo.listen(8080, () =>
  ConnectDB()
    .then(() => console.log("Server is up and running"))
    .catch(() => console.log("DB connection failed"))
);
