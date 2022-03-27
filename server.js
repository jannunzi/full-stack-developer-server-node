import express from 'express';
import cors from 'cors';
import userController from "./controllers/users-controller.js";
import helloController from "./controllers/hello-controller.js";
import tuitsController from "./controllers/tuiter/tuits-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
tuitsController(app);

userController(app);
app.listen(process.env.PORT || 4000);