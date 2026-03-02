const db = require("../config/db");

const Product = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows[0];
  },
  create: async (data) => {
    const query = `INSERT INTO products (id, slug, category_slug, name, short_description, description, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      data.id,
      data.slug,
      data.category_slug,
      data.name,
      data.short_description,
      data.description,
      data.image_url,
    ];
    const [result] = await db.query(query, values);
    return result;
  },
  update: async (id, data) => {
    const query = `
        UPDATE products 
        SET name = ?, category_slug = ?, short_description = ?, description = ?, image_url = ?, slug = ?
        WHERE id = ?
    `;
    const values = [
      data.name,
      data.category_slug,
      data.short_description,
      data.description,
      data.image_url,
      data.slug,
      id,
    ];
    const [result] = await db.query(query, values);
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM products WHERE id = ?", [id]);
    return result;
  },
};

module.exports = Product;
