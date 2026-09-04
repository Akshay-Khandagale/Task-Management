import userModel from "../models/addUserModel.js";

const saveUserData = async (req, res) => {
    try {
        const { name, lname } = req.body;

        console.log('name', req.body.name);

        const data = await userModel.userSaveData(name, lname);
        return res.status(200).json({
            message: "User Successfully Inserted"
        });
    } catch (error) {
        return res.status(401).json({
            message: "User Data Failed"
        });
    }
}

export default {
    saveUserData
}