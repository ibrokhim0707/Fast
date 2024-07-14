const app = require('../app');
const prisma = require('../utils/connection');

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
