const express = require('express');
const { User } = require('./../models');

const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getAll );

// router.get('/:email', usersController.getbyEmail )

router.post('/', usersController.insertUser);

module.exports= router;