const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/is-admin.middleware');
const { createCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');

router.post('/', isAdmin, createCategory);
router.put('/:id', isAdmin, updateCategory);
router.delete('/:id', isAdmin, deleteCategory);

module.exports = router;
