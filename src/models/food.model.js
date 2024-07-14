const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Food = prisma.food;

module.exports = Food;
