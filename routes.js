const express = require('express');
const router = express.Router();
const UsersController = require('./controllers/UsersController');

router.get('/', UsersController.showAllUsers);
router.get('/:id', UsersController.showUserId);
router.get('/:name', UsersController.showUserName);
router.post('/', UsersController.createUser);
router.put('/:id', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);
module.exports = router;
