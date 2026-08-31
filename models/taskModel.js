import db from '../config/db.js'

async function taskModel(title, description, priority, status, start_date, due_date, assigned_to) {
    const [data] = await db.execute("INSERT INTO task_management(title, description, priority, status, start_date, due_date, assigned_to) VALUES (?,?,?,?,?,?,?)", [title, description, priority, status, start_date, due_date, assigned_to]);
    return data;
}

// const taskModel = [
//     taskSave
// ];

export default taskModel;