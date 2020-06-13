const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(cors());

app.get('/api/host', (req, res) => {
  db.query("select * from movie_list", (err, data) => {
    if(!err) {
      res.send(data);

    } else {
      console.log('******',err);
      res.send(err);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})