const mysql = require('mysql');

const db = mysql.createPool({
  host: 'RDS 엔드 포인트',
  port: 3306,
  user: 'admin',
  password: 'stringstring',
  database: ''
});

module.exports = db;