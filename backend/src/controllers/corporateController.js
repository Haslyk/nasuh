const Corporate = require("../models/Corporate");

exports.getPage = async (req, res) => {
  try {
    const page = await Corporate.getBySlug(req.params.slug);
    if (!page) return res.status(404).json({ message: "Sayfa bulunamadı" });
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: "Hata oluştu" });
  }
};

exports.updatePage = async (req, res) => {
  try {
    await Corporate.update(req.params.slug, req.body);
    res.json({ message: "İçerik güncellendi" });
  } catch (error) {
    res.status(500).json({ message: "Güncelleme hatası" });
  }
};
