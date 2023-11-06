const express = require('express');
const { join } = require('path');

const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'ssh_link.html'));
});

// Handle download request
app.get('/funny.zip', (req, res) => {
  const file = join(__dirname, 'public', 'funny.zip');
  res.download(file, 'funny.zip');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
