const db = require("../config/db");

const Config = {
  // Tüm ayarları getir
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM site_config WHERE id = 1");
    return rows[0];
  },
  // Ayarları güncelle
  update: async (data) => {
    const query = `
            UPDATE site_config 
            SET company_name = ?, tagline = ?, phone = ?, email = ?, address = ?
            WHERE id = 1
        `;
    const values = [
      data.company_name,
      data.tagline,
      data.phone,
      data.email,
      data.address,
    ];
    const [result] = await db.query(query, values);
    return result;
  },
};

module.exports = Config;
