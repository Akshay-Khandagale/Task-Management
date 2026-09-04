import addUserCon from '../controllers/addUserController.js'
import express from 'express'

const router = express.Router();

router.get('/showUserForm', (req, res) => {
    res.render('addUser');
});

router.get('/saveUser', addUserCon.saveUserData);

export default router