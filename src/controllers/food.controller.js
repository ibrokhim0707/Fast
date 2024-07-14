const prisma = require('../../config');

const createFood = async (req, res) => {
  try {
    const { name, photo, price, categoryId } = req.body;
    const food = await prisma.food.create({
      data: { name, photo, price, categoryId: Number(categoryId) },
    });
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, photo, price, categoryId } = req.body;
    const food = await prisma.food.update({
      where: { id: Number(id) },
      data: { name, photo, price, categoryId: Number(categoryId) },
    });
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.food.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFood,
  updateFood,
  deleteFood,
};
