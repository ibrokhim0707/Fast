const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/is-admin.middleware');
const { createOrder, updateOrder, deleteOrder } = require('../controllers/order.controller');

router.post('/', createOrder);
router.put('/:id', isAdmin, updateOrder);
router.delete('/:id', isAdmin, deleteOrder);

module.exports = router;
