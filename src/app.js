const express = require('express');
const app = express();

var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');

const path = require('path');

app.use(express.json());

// ------ Configure swagger docs ------
var options = {
  swaggerDefinition: {
    info: {
      title: 'My Music Library',
      version: '1.0.0',
      description: 'Music Library by David Cheung',
    },
  },
  apis: [path.join(__dirname, './routes/*.js')],
};
var swaggerSpecs = swaggerJsdoc(options);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// app.get('/', (req, res) => {
//   res.status(200).json({ result: 'hello world!' });
// });

// $$$ my testing $$$
// app.get('/hello', (req, res) => {
//   res.json({ result: 'hello' });
// });
// app.get('/hello/:name', (req, res) => {
//   res.json({ result: req.params.name });
// });

const artistRouter = require('../src/routes/artist');
app.use(artistRouter);

const albumRouter = require('../src/routes/album');
app.use(albumRouter);

module.exports = app;
