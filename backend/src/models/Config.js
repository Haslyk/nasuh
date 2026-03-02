const db = require("../config/db");

const Config = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM site_config LIMIT 1");
    return rows[0];
  },
  update: async (data) => {
    const query = `
            UPDATE site_config 
            SET company_name = ?, tagline = ?, phone = ?, email = ?, address = ?, 
                working_hours = ?, linkedin = ?, instagram = ?, youtube = ?, map_embed_url = ?
            WHERE id = 1
        `;
    const values = [
      data.company_name,
      data.tagline,
      data.phone,
      data.email,
      data.address,
      data.working_hours,
      data.linkedin,
      data.instagram,
      data.youtube,
      data.map_embed_url,
    ];
    const [result] = await db.query(query, values);
    return result;
  },
};

module.exports = Config;
