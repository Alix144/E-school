import Hw from "../models/HwModel.js";
import SubmittedHw from "../models/SubmittedHwModel.js";
import User from "../models/UserModel.js"
import mongoose from "mongoose";

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

export const getStudentHw = async(req, res, next) => {
    const id = req.params.id;
    let homework;
    let user;
    let subjects;
    try{
        user = await User.findOne({ _id: id})
        subjects = user.subjects
        homework = await Hw.find( {subject: { $in: subjects }})
    }catch(err){
        return res.status(400).json({err})
    }

    if(!homework){
        return res.status(404).json({message: "No homeworks Found"});
    }

    return res.status(200).json({homework})
}

export const getTeacherHw = async(req, res, next) => {
    const id = req.params.id;
    let homework;
    try{
        homework = await Hw.find({ assignedBy: id })
    }catch(err){
        return res.status(400).json({err})
    }

    if(!homework){
        return res.status(404).json({message: "No homeworks Found"});
    }

    return res.status(200).json({homework})
}

export const getHwDetails = async(req, res, next) => {
    const id = req.params.id;
    let homework;
    try{
        homework = await Hw.findOne({ _id: id })
    }catch(err){
        return res.status(400).json({err})
    }

    if(!homework){
        return res.status(404).json({message: "No homework Found"});
    }

    return res.status(200).json({homework})
}

export const addHw = async(req, res, next) => {
    const {topic, description, addingDate, deadline, assignedBy} = req.body;
    const file = req.file.filename;
    console.log(file);
    let existingUser;
    let subject;
    try{
        existingUser = await User.findById(assignedBy)
        subject = existingUser.subject
    }catch(err){
        return console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "Unable to Find User by This ID"})
    }

    const homework = new Hw({topic, subject, description, addingDate, deadline, file, assignedBy})
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await homework.save({session})

        await existingUser.save({session})

        await session.commitTransaction();
    }catch(err){
        console.log(err)
        return res.status(500).json({message: "err :)"})
    }

    return res.status(200).json({homework})
}

export const submitHw = async(req, res, next) => {
    const {hw, submittedDate, userId} = req.body;
    const file = req.file.filename;

    console.log(file);
    let existingUser;
    let homework;
    try{
        existingUser = await User.findById(userId)
        homework = await Hw.findById(hw)
    }catch(err){
        return console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "Unable to Find User by This ID"})
    }
    
    if(!homework){
        return res.status(400).json({message: "Unable to Find Homework by This ID"})
    }

    const submittedHw = new SubmittedHw({hw, submittedDate, file, submittedBy: userId})
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await submittedHw.save({session})

        await existingUser.save({session})

        await session.commitTransaction();
    }catch(err){
        console.log(err)
        return res.status(500).json({message: "err :)"})
    }

    return res.status(200).json({submittedHw})
}

export const getStudentSubmittedHws = async(req, res, next) => {
    const id = req.params.id;
    let homeworks;
    let user;
    try{
        user = await User.findOne({ _id: id})
        homeworks = await SubmittedHw.find({submittedBy:id}).populate('hw')

    }catch(err){
        return res.status(400).json({err})
    }

    if(!user){
        return res.status(404).json({message: "No User Found"});
    }

    if(!homeworks){
        return res.status(404).json({message: "No homeworks Found"});
    }

    return res.status(200).json({homeworks})
}

export const getTeacherComingHws = async(req, res, next) => {
    const id = req.params.id;
    let homeworks;
    let user;
    let subject;
    let comingHws = [];
    try{
        user = await User.findOne({ _id: id})
        homeworks = await SubmittedHw.find().populate('hw').populate('submittedBy')

    }catch(err){
        return res.status(400).json({err})
    }

    if(!user){
        return res.status(404).json({message: "No User Found"});
    }

    if(!homeworks){
        return res.status(404).json({message: "No homeworks Found"});
    }

    subject = user.subject
    
    homeworks.forEach(submittedHw => {
        if(submittedHw.hw.subject === subject){
            comingHws.push(submittedHw)
        }
    });

    return res.status(200).json({comingHws})
}

export const gradeHw = async(req, res, next) => {
    const {grade} = req.body;
    const { id } = req.params;

    try {
        const addedGrade = await SubmittedHw.findByIdAndUpdate(
          id,
          { grade },
          { new: true }
        );
    
        res.json(addedGrade);
      } catch (error) {
        res.status(500).json({ error: 'error' });
      }
    

}