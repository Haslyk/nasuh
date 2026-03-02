const Stat = require("../models/Stat");

exports.getAllStats = async (req, res) => {
  try {
    const stats = await Stat.getAll();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "İstatistikler getirilemedi" });
  }
};

exports.createStat = async (req, res) => {
  try {
    await Stat.create(req.body);
    res.status(201).json({ message: "İstatistik eklendi" });
  } catch (error) {
    res.status(500).json({ message: "Ekleme hatası" });
  }
};

exports.updateStat = async (req, res) => {
  try {
    await Stat.update(req.params.id, req.body);
    res.json({ message: "İstatistik güncellendi" });
  } catch (error) {
    res.status(500).json({ message: "Güncelleme hatası" });
  }
};

exports.deleteStat = async (req, res) => {
  try {
    await Stat.delete(req.params.id);
    res.json({ message: "İstatistik silindi" });
  } catch (error) {
    res.status(500).json({ message: "Silme hatası" });
  }
};
