const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test sorgusu ekliyoruz
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL Bağlantı Hatası:", err.message);
  } else {
    console.log("✅ MySQL Bağlantısı Başarılı (Pool Hazır).");
    connection.release(); // Bağlantıyı havuza geri bırak
  }
});

const promisePool = pool.promise();
module.exports = promisePool;
