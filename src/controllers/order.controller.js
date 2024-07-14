const prisma = require('../../config');

const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const order = await prisma.order.create({
      data: { items },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { items } = req.body;
    const order = await prisma.order.update({
      where: { id: Number(id) },
      data: { items },
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.order.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
};
