const db = require("../config/db");

const Partner = {
  getAll: async () => {
    const [rows] = await db.query(
      "SELECT * FROM partners ORDER BY order_index ASC"
    );
    return rows;
  },
  create: async (data) => {
    const query = `INSERT INTO partners (name, image_url, order_index) VALUES (?, ?, ?)`;
    const [result] = await db.query(query, [
      data.name,
      data.image_url,
      data.order_index || 0,
    ]);
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM partners WHERE id = ?", [id]);
    return result;
  },
};

module.exports = Partner;
