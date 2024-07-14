const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route');
const categoryRoutes = require('./category.route');
const foodRoutes = require('./food.route');
const orderRoutes = require('./order.route');

router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
router.use('/foods', foodRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
