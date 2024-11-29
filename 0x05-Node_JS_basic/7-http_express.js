const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  const dbFile = process.argv[2]; // Get the database file from command line argument

  if (!dbFile) {
    res.status(500).send(`${title}Cannot load the database`);
    return;
  }

  try {
    const data = await countStudents(dbFile);
    res.send(`${title}${data.join('\n')}`);
  } catch (error) {
    res.status(500).send(`${title}${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
