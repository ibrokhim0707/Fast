const prisma = require('../../config');

const createCategory = async (req, res) => {
  try {
    const { name, photo } = req.body;
    const category = await prisma.category.create({
      data: { name, photo },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    const category = await prisma.category.update({
      where: { id: Number(id) },
      data: { name, photo },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.category.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
};
