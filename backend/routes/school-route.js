import express from "express";
import { addHw, getAllHw, getStudentHw, getTeacherHw, getHwDetails } from "../controllers/school-controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/", getAllHw)
schoolRouter.get("/student/:id", getStudentHw)
schoolRouter.get("/teacher/:id", getTeacherHw)
schoolRouter.get("/hwDetails/:id", getHwDetails)

schoolRouter.post("/add/hw", addHw)

export default schoolRouter;