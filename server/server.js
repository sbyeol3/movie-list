const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/host', (req, res) => {
  res.send(`Response`);
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})