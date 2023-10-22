import express from "express";
import { addHw, getAllHw, getStudentHw, getTeacherHw, getHwDetails } from "../controllers/school-controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/", getAllHw)
schoolRouter.get("/student/:id", getStudentHw)
schoolRouter.get("/teacher/:id", getTeacherHw)
schoolRouter.get("/hwDetails/:id", getHwDetails)


/**********upload files**********/
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

schoolRouter.post("/add/hw", upload.single("file"), addHw)

export default schoolRouter;