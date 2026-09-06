import db from "../config/db.js";

const userSaveData = async (name, lname) => {
    const data = await db.execute('insert into new_users (name,lastname) values(?,?)', [name, lname]);
    return data;
}

const showUserData = async () => {
    const [showData] = await db.execute("select * from new_users");
    return showData;
}

export default {
    userSaveData,
    showUserData
}