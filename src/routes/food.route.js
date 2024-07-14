const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/is-admin.middleware');
const { createFood, updateFood, deleteFood } = require('../controllers/food.controller');

router.post('/', isAdmin, createFood);
router.put('/:id', isAdmin, updateFood);
router.delete('/:id', isAdmin, deleteFood);

module.exports = router;
