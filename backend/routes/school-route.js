import express from "express";
import { getAllHw } from "../controllers/school-controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/", getAllHw)

export default schoolRouter;