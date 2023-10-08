import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err)
    }

    if(!users){
        return res.status(404).json({message: "No Users Found"})
    }

    return res.status(200).json({users});
}

export const getUserById = async(req, res, next) => {
    const id = req.params.id.toString();
    let users;
    try{
        users = await User.findById(id);
    }catch(err){
        console.log(err)
    }

    if(!users){
        return res.status(404).json({message: "No User Found"})
    }

    return res.status(200).json({users});
}

export const getAllTeachers = async(req, res, next) => {
    let teachers;
    try{
        teachers = await User.find({ role: 'teacher' });
    }catch(err){
        console.log(err)
    }

    if(!teachers){
        return res.status(404).json({message: "No Teacher Found"})
    }

    return res.status(200).json({teachers});
}

export const getAllStudnets = async(req, res, next) => {
    let students;
    try{
        students = await User.find({ role: 'student' });
    }catch(err){
        console.log(err)
    }

    if(!students){
        return res.status(404).json({message: "No student Found"})
    }

    return res.status(200).json({students});
}

export const signup = async(req, res, next) => {
    const {name, email, password, role, subjects, subject} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({name})

    }catch(err){
        return console.log(err + "there was an error")
    }

    if(existingUser){
        return res.status(400).json({message: "User Already Exists!"})
    }

    const hashedPassword = bcrypt.hashSync(password);
    

    const user= new User({
        name,
        email,
        password: hashedPassword,
        role,
        subjects,
        subject,
    })

    try{
        await user.save()
    }catch(err){
        console.log(err +"jjjnkn")
        return res.status(400).json({message: err})
    }

    return res.status(201).json({user})
}

export const login = async(req, res, next) => {
    const {email, password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({email})

    }catch(err){
        return console.log(err)
    }

    if(!existingUser){
        return res.status(404).json({message: "User Does Not Exist!"})
    }

    const isPassCorrect = bcrypt.compareSync(password,  existingUser.password)

    if(!isPassCorrect){
        return res.status(400).json({message: "Incorrect Password"})
    }

    return res.status(200).json({message: "Login Successfull", user: existingUser})
}