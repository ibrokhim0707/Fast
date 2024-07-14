require('dotenv').config();

const dbConfig = {
  // PostgreSQL connection details
  // For example:
  // url: process.env.DATABASE_URL
};

const PORT = process.env.PORT || 3000;

module.exports = {
  dbConfig,
  PORT,
};
