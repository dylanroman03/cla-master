const { promisify } = require("util");
const mysql = require("mysql");
const { database } = require("./keys.js");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    console.error(err);
  }
  if (connection) connection.release();
  console.log("DB is connect");
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;
