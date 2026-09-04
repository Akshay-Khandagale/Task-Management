import db from "../config/db.js";

const userSaveData = async (name, lname) => {
    console.log('name===', name);
    const data = await db.execute('insert into new_users (name,lastname) values(name,lastname)', [name, lname]);
    return data;
}

export default {
    userSaveData
}