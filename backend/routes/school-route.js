import express from "express";
import { addHw, getAllHw, getTeacherHw } from "../controllers/school-controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/", getAllHw)
schoolRouter.get("/:id", getTeacherHw)
schoolRouter.post("/add/hw", addHw)

export default schoolRouter;