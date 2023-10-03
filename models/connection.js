const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

connection.connect(err => {
    if (err) throw err
  console.log('DB esta conectada')
});

// truco para mantener la conexiòn

setInterval(function () {
  connection.query('SELECT 1');
  //console.log("manteniendo viva la conexion")
}, 50000);
module.exports = connection;