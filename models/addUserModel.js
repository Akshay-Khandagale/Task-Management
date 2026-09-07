import db from "../config/db.js";

const userSaveData = async (name, lname) => {
    const data = await db.execute('insert into new_users (name,lastname) values(?,?)', [name, lname]);
    return data;
}

const showUserData = async (limit, offset) => {

    const [showData] = await db.execute(
        "SELECT * FROM new_users LIMIT ? OFFSET ?",
        [limit, offset]
    );

    return showData;
};

const countUsers = async () => {

    const [result] = await db.execute(
        "SELECT COUNT(*) AS total FROM new_users"
    );

    return result[0].total;
};

const deleteUserData = async (id) => {
    const deleteResult = await db.execute("delete from new_users where id = ?", [id]);
    return deleteResult;
}

export default {
    userSaveData,
    showUserData,
    countUsers,
    deleteUserData
}