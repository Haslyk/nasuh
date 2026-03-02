const Slider = require("../models/Slider");
const { v4: uuidv4 } = require("uuid");

exports.getAllSliders = async (req, res) => {
  try {
    const sliders = await Slider.getAll();
    res.json(sliders);
  } catch (error) {
    res.status(500).json({ message: "Sliderlar getirilemedi" });
  }
};

exports.createSlider = async (req, res) => {
  try {
    const sliderData = { ...req.body, id: uuidv4() };
    if (req.file) sliderData.image_url = `/uploads/${req.file.filename}`;
    await Slider.create(sliderData);
    res.status(201).json({ message: "Slider eklendi" });
  } catch (error) {
    res.status(500).json({ message: "Hata oluştu", error: error.message });
  }
};

exports.updateSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await Slider.getById(id);
    if (!existing) return res.status(404).json({ message: "Bulunamadı" });

    const data = { ...req.body };
    data.image_url = req.file
      ? `/uploads/${req.file.filename}`
      : existing.image_url;

    await Slider.update(id, data);
    res.json({ message: "Güncellendi" });
  } catch (error) {
    res.status(500).json({ message: "Hata oluştu" });
  }
};

exports.deleteSlider = async (req, res) => {
  try {
    await Slider.delete(req.params.id);
    res.json({ message: "Silindi" });
  } catch (error) {
    res.status(500).json({ message: "Hata oluştu" });
  }
};
