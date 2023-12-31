import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import router from "./routes/user-route.js";
import schoolRouter from "./routes/school-route.js"
import { config } from 'dotenv';
config();

const port = process.env.port;
const app = express();

// app.use(cors({
//     origin: ["http://localhost:4000/"],
//     methods: ["POST", "GET", "PUT", "DELETE"]
// }))

app.use(cors());

app.use(express.json())
app.use("/files", express.static("files"));

app.use("/user", router)
app.use("/school", schoolRouter)

app.get("/", (req, res)=>{
    res.send("messaghaha")
})


mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(port, () => {
    console.log("Live on port " + port)
})).catch((err) => console.log(err))