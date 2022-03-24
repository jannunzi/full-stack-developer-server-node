import express from 'express';
import cors from 'cors';
// import UserController from "./controllers/users-controller.js";
import helloController from "./controllers/hello-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);

// UserController(app);
app.listen(4000);