const app = require('./src/app.js');

app.get('/', (req, res) => {
  res.status(200).json({ result: 'hello world!' });
});

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
