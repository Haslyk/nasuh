const db = require("../config/db");

const Category = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM categories ORDER BY name ASC");
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM categories WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },
  create: async (data) => {
    const query = `INSERT INTO categories (id, name, slug, description) VALUES (?, ?, ?, ?)`;
    const values = [data.id, data.name, data.slug, data.description];
    const [result] = await db.query(query, values);
    return result;
  },
  update: async (id, data) => {
    const query = `UPDATE categories SET name = ?, slug = ?, description = ? WHERE id = ?`;
    const values = [data.name, data.slug, data.description, id];
    const [result] = await db.query(query, values);
    return result;
  },
  updateImageUrl: async (slug, imageUrl) => {
    return await db.query(
      "UPDATE categories SET image_url = ? WHERE slug = ?",
      [imageUrl, slug]
    );
  },
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM categories WHERE id = ?", [
      id,
    ]);
    return result;
  },
};

module.exports = Category;
