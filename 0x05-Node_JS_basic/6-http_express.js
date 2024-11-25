/**
 * Simple express server
 * it should listen on port 1245
 * it should be assigned to the variable app
 * it displays Hello Holberton School! when the URL path is /
 */
const express = require('express');

const host = '127.0.0.1';
const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;
