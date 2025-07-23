const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

let currentValue = 0;

setInterval(() => {
  currentValue = currentValue === 0 ? 1 : 0;
}, Math.floor(Math.random() * 500) + 500);

app.get('/api/binary', (req, res) => {
  res.json({ value: currentValue });
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
