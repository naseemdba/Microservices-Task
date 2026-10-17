const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Product Service is running!');
});

app.listen(PORT, () => {
  console.log(`Product Service is listening on port ${PORT}`);
});

