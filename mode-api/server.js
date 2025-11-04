const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node API!' });
});

app.listen(port, () => {
  console.log(`Node API running at http://localhost:${port}`);
});
