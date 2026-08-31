import taskModel from "../models/taskModel.js";

const taskController = async (req, res) => {
    try {
        console.log(req.body);


        const { title, description, priority, status, start_date, due_date, assigned_to } = req.body;



        const data = await taskModel(title, description, priority, status, start_date, due_date, assigned_to);
        res.status(200).json({
            message: "Task Assigned SuccessFully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Task Assigned Failed",
            error
        })
    }
}

// const taskController = [
//     saveTask
// ];

export default taskController