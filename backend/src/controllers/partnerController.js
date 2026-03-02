const Partner = require("../models/Partner");
const path = require("path");
const fs = require("fs");

exports.getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.getAll();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: "Partnerler getirilemedi" });
  }
};

exports.createPartner = async (req, res) => {
  try {
    const { name } = req.body;
    if (!req.file)
      return res.status(400).json({ message: "Logo yüklenmelidir" });

    const imageUrl = `/uploads/${req.file.filename}`;
    await Partner.create({ name, image_url: imageUrl });
    res.status(201).json({ message: "Partner eklendi" });
  } catch (error) {
    res.status(500).json({ message: "Ekleme hatası" });
  }
};

exports.deletePartner = async (req, res) => {
  try {
    const [partner] = await Partner.getAll(); // Basitlik için tümünü çekip ID eşleyebiliriz veya modele getById ekleyebilirsin
    await Partner.delete(req.params.id);
    res.json({ message: "Partner silindi" });
  } catch (error) {
    res.status(500).json({ message: "Silme hatası" });
  }
};
