import express from "express";
import { addHw, getAllHw } from "../controllers/school-controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/", getAllHw)
schoolRouter.post("/add/hw", addHw)

export default schoolRouter;