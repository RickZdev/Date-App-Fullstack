const express = require('express');
const { createUser, getAllUsers, getSingleUser, deleteUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getSingleUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;