const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Bağlantı Hatası: " + err.stack);
    return;
  }
  console.log("MySQL Bağlantısı Başarılı.");
});

app.listen(process.env.PORT, () => {
  console.log(`Server ${process.env.PORT} portunda çalışıyor.`);
});
