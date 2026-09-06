import userModel from "../models/addUserModel.js";

const saveUserData = async (req, res) => {
    try {
        const { name, lname } = req.body;

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

const displayUsers = async (req, res) => {
    try {
        const result = await userModel.showUserData();

        return res.render('ShowUser', {
            users: result
        });

    } catch (error) {
        console.log(error);

        return res.status(500).send("User Data Failed");
    }
}

export default {
    saveUserData,
    displayUsers
}