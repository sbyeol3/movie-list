const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'string',
  database: 'movies'
});

module.exports = db;