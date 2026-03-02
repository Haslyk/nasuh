const Config = require("../models/Config");

exports.getSettings = async (req, res) => {
  try {
    const settings = await Config.getAll();
    res.json(settings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ayarlar getirilirken hata oluştu", error });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    await Config.update(req.body);
    res.json({ message: "Ayarlar başarıyla güncellendi" });
  } catch (error) {
    res.status(500).json({ message: "Güncelleme hatası", error });
  }
};
