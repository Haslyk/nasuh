const db = require("../config/db");

const Corporate = {
  getBySlug: async (slug) => {
    const [rows] = await db.query(
      "SELECT * FROM corporate_pages WHERE slug = ?",
      [slug]
    );
    return rows[0];
  },
  update: async (slug, data) => {
    const query = `UPDATE corporate_pages SET title = ?, subtitle = ?, content = ? WHERE slug = ?`;
    const [result] = await db.query(query, [
      data.title,
      data.subtitle,
      data.content,
      slug,
    ]);
    return result;
  },
};

module.exports = Corporate;
