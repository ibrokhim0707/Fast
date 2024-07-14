const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const User = {
  /**
   * 
   * @param {Object} data 
   * @returns {Promise}
   */
  create: async (data) => {
    try {
      const user = await prisma.user.create({
        data,
      });
      return user;
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  },

  /**
   * @param {string} email 
   * @returns {Promise}
   */
  findByEmail: async (email) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Failed to find user: ${error.message}`);
    }
  },

  /**
   * @param {number} id 
   * @param {Object} data 
   * @returns {Promise} 
   */
  update: async (id, data) => {
    try {
      const user = await prisma.user.update({
        where: {
          id,
        },
        data,
      });
      return user;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  },

  /**
   * @param {number} id
   * @returns {Promise} 
   */
  deleteById: async (id) => {
    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  },
};

module.exports = User;
