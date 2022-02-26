import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
UserController(app);
app.listen(4000);