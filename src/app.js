const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); 
const errorHandler = require('./middlewares/error-handler.middleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
