import express from "express";
import { getAllUser, signup, login, getAllTeachers, getAllStudnets, getUserById, editUser, deleteUser } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUser)
router.get("/teachers", getAllTeachers)
router.get("/students", getAllStudnets)
router.get("/:id", getUserById)
router.post("/signup", signup)
router.post("/login", login)
router.put("/edit/:id", editUser)
router.delete("/delete/:id", deleteUser)

export default router;