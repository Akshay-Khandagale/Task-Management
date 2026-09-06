import addUserCon from '../controllers/addUserController.js'
import express from 'express'

const router = express.Router();

router.get('/showUserForm', (req, res) => {
    res.render('addUser');
});

router.post('/saveUser', addUserCon.saveUserData);

router.get("/showUserData", addUserCon.displayUsers);

export default router