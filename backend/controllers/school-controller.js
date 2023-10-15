import Hw from "../models/HwModel.js";
import User from "../models/UserModel.js"
import bcrypt from "bcryptjs";

export const getAllHw = async(req, res, next) => {
    let homeworks;
    try{
        homeworks = await Hw.find()
        // .populate('user');
    }catch(err){
        return console.log(err)
    }

    if(!homeworks){
        return res.status(404).json({message: "No Homeworks Found"})
    }

    return res.status(200).json({homeworks})
}

export const addWorkout = async(req, res, next) => {
    const {topic, description, deadline, file, assignedBy} = req.body;

    let existingUser;
    try{
        existingUser = await User.findById(user)
    }catch(err){
        console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "Unable to Find User by This ID"})
    }

    const homework = new Hw({topic, subject, description, date, deadline, file})
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await homework.save({session})

        existingUser.workout.push(workout)
        await existingUser.save({session})

        await session.commitTransaction();
    }catch(err){
        console.log(err)
        return res.status(500).json({message: "err :)"})
    }

    return res.status(200).json({workout})
}