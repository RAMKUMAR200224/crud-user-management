import User from "../model/usermodel.js";

export const create = async (req, res) => {
    try {
        const userdata = new User(req.body);
        const { email } = userdata;

        const userexist = await User.findOne({ email });
        if (userexist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const saveduser = await userdata.save();
        res.status(201).json(saveduser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// FETCH ALL USERS
export const fetch = async (req, res) => {
    try {
        const users = await User.find(); // DB find()
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// FETCH SINGLE USER
export const fetchOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE USER
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE USER
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const ram = (req, res) => {
    res.status(200).json({ message: "Ram is here" });
};