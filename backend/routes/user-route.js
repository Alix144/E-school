import express from "express";
import { getAllUser, signup, login, getAllTeachers, getAllStudnets, getUserById } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUser)
router.get("/:id", getUserById)
router.get("/teachers", getAllTeachers)
router.get("/students", getAllStudnets)
router.post("/signup", signup)
router.post("/login", login)

export default router;