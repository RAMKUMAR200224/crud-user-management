import User from "../model/usermodel.js";

export const create = async (req, res) => {
    try {
        const userdata = new User(req.body);
        const {email} = userdata;
        const userexist = await User.findOne({email: email})
        if(userexist){
            return res.status(400).json({message: "User already exists"});
        }
        const saveduser = await userdata.save();
        res.status(201).json(saveduser);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
    }

export const fetch = async (req, res) => { 
    try {
       return res.json("ramkumar");
} catch (error) {
    res.status(500).json({ message: error.message });
}};