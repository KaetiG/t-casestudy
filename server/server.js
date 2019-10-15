const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mtntRouter = require('./routes/MTNT');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route
app.use('/', mtntRouter);

// App Set //
const PORT = 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});