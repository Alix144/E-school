import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hwSchema = new Schema({

      topic: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      Description: {
        type: String
      },
      date: {
        type: Date,
        required: true
      },
      deadline: {
        type: Date,
        required: true
      },
      file: {
        type: String,
      },
      assignedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },

})

export default mongoose.model("Hw", hwSchema)