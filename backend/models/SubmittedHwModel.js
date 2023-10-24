import mongoose from "mongoose";

const Schema = mongoose.Schema;

const submittedhwSchema = new Schema({

      hw: {
        type: mongoose.Types.ObjectId,
        ref: "Hw",
        required: true,
      },
      submittedDate: {
        type: Date,
        required: true
      },
      file: {
        type: String,
        required: true
      },
      grade: {
        type: Number,
        min: 0,
        max: 100
      },
      submittedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },

})

export default mongoose.model("SubmittedHw", submittedhwSchema)