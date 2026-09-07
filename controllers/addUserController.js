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

        const page = parseInt(req.query.page) || 1;
        console.log("page===>", page);

        const limit = 5;

        const offset = (page - 1) * limit;
        console.log("offset===>", offset);

        const result = await userModel.showUserData(limit, offset);

        const totalUsers = await userModel.countUsers();

        const totalPages = Math.ceil(totalUsers / limit);

        return res.render('ShowUser', {
            users: result,
            currentPage: page,
            totalPages: totalPages
        });

    } catch (error) {

        console.log(error);

        return res.status(500).send("User Data Failed");
    }
}

const deleteUsers = async (req, res) => {
    try {
        const id = req.body.id;
        const data = await userModel.deleteUserData(id);
        res.status(200).json({
            message: "Delete successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "failed to delete data"
        });
    }
};

export default {
    saveUserData,
    displayUsers,
    deleteUsers
}