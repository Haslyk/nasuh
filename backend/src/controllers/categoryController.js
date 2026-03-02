const Category = require("../models/Category");
const { v4: uuidv4 } = require("uuid");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Kategoriler getirilemedi" });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const id = uuidv4();

    await Category.create({ id, name, slug, description });
    res.status(201).json({ message: "Kategori oluşturuldu" });
  } catch (error) {
    console.error("KATEGORİ OLUŞTURMA HATASI:", error);
    res.status(500).json({
      message: "Kategori oluşturulamadı",
      error: error.sqlMessage || error.message,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    await Category.update(id, { name, slug, description });
    res.json({ message: "Kategori başarıyla güncellendi" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Güncelleme hatası", error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.delete(req.params.id);
    res.json({ message: "Kategori silindi" });
  } catch (error) {
    res.status(500).json({ message: "Kategori silinemedi" });
  }
};
