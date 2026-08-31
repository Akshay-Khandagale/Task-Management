import express from 'express'
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/task', (req, res) => {
    res.render('task');
});

router.post('/save_task', taskController);

export default router;