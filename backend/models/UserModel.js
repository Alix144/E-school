import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({

      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['admin', 'student', 'teacher'],
        required: true
      },
      subjects: [String], // Only for students
      subject: String, // Only for teachers
})

export default mongoose.model("User", userSchema)