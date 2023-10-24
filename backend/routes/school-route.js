import express from "express";
import { addHw, getAllHw, getStudentHw, getTeacherHw, getHwDetails, submitHw, getStudentSubmittedHws, getTeacherComingHws, gradeHw } from "../controllers/school-controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/", getAllHw)
schoolRouter.get("/student/:id", getStudentHw)
schoolRouter.get("/studentHw/:id", getStudentSubmittedHws)
schoolRouter.get("/teacher/:id", getTeacherHw)
schoolRouter.get("/teacher/coming/:id", getTeacherComingHws)
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

schoolRouter.post("/submit/hw", upload.single("file"), submitHw)

schoolRouter.post("/grade/:id", gradeHw)

export default schoolRouter;