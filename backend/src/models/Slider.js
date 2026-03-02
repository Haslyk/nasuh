const db = require("../config/db");

const Slider = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM sliders ORDER BY id DESC");
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM sliders WHERE id = ?", [id]);
    return rows[0];
  },
  create: async (data) => {
    const query = `INSERT INTO sliders (id, title, subtitle, image_url, button_text, button_link) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      data.id,
      data.title,
      data.subtitle,
      data.image_url,
      data.button_text,
      data.button_link,
    ];
    const [result] = await db.query(query, values);
    return result;
  },
  update: async (id, data) => {
    const query = `UPDATE sliders SET title = ?, subtitle = ?, image_url = ?, button_text = ?, button_link = ? WHERE id = ?`;
    const values = [
      data.title,
      data.subtitle,
      data.image_url,
      data.button_text,
      data.button_link,
      id,
    ];
    const [result] = await db.query(query, values);
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM sliders WHERE id = ?", [id]);
    return result;
  },
};

module.exports = Slider;
