const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// Creas una conexion a la base de datos 
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Abres la conexion a la base de datos
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;