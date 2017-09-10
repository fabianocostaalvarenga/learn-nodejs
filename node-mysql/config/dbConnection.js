'strict mode';

const mysql = require('mysql');

const connMySQL = function () {
  return mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'srwcemfa',
    database: 'portal_noticias'
  });
}

module.exports = function () {
  return connMySQL;
}