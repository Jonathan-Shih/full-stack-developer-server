import express from "express";
import cors from "cors";
import helloController from "./controllers/hello-controller.js";
import tuitController from "./controllers/tuits-controller.js";
import userController from "./controllers/user-controller.js";

const app = express();
app.use(cors());

app.use(express.json());
helloController(app);
userController(app);
tuitController(app);

app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Development!");
});

app.listen(process.env.PORT || 4000);
