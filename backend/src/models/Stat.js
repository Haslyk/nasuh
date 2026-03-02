const db = require("../config/db");

const Stat = {
  getAll: async () => {
    const [rows] = await db.query(
      "SELECT * FROM stats ORDER BY order_index ASC"
    );
    return rows;
  },
  create: async (data) => {
    const query = `INSERT INTO stats (label, value, icon_name, order_index) VALUES (?, ?, ?, ?)`;
    const [result] = await db.query(query, [
      data.label,
      data.value,
      data.icon_name,
      data.order_index || 0,
    ]);
    return result;
  },
  update: async (id, data) => {
    const query = `UPDATE stats SET label = ?, value = ?, icon_name = ? WHERE id = ?`;
    const [result] = await db.query(query, [
      data.label,
      data.value,
      data.icon_name,
      id,
    ]);
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM stats WHERE id = ?", [id]);
    return result;
  },
};

module.exports = Stat;
