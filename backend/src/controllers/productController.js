const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Multer Ayarları (Resim nereye ve hangi isimle kaydedilecek?)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

exports.uploadImage = upload.single("image");

// Tüm ürünleri getir
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Ürünler getirilemedi", error });
  }
};

// Yeni ürün ekle
exports.createProduct = async (req, res) => {
  try {
    const productData = req.body;
    productData.id = uuidv4();
    if (req.file) {
      productData.image_url = `/uploads/${req.file.filename}`;
    }
    productData.slug = productData.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    await Product.create(productData);
    res.status(201).json({ message: "Ürün başarıyla eklendi" });
  } catch (error) {
    console.error("❌ Ürün Ekleme Hatası:", error); // Terminalde hatayı görmek için
    res.status(500).json({
      message: "Ürün eklenirken hata oluştu",
      error: error.message, // Hatayı frontend'e gönder
      sqlMessage: error.sqlMessage, // Eğer SQL hatasıysa detayı
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const existingProduct = await Product.getById(id);

    if (!existingProduct) {
      return res.status(404).json({ message: "Ürün bulunamadı" });
    }

    const productData = { ...req.body };

    // Yeni resim yüklendiyse onu kullan, yoksa eski resmi koru
    productData.image_url = req.file
      ? `/uploads/${req.file.filename}`
      : existingProduct.image_url;

    productData.slug = productData.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    await Product.update(id, productData);
    res.json({ message: "Ürün başarıyla güncellendi" });
  } catch (error) {
    console.error("Güncelleme Hatası:", error);
    res.status(500).json({ message: "Güncelleme sırasında hata oluştu" });
  }
};

// Ürün sil
exports.deleteProduct = async (req, res) => {
  try {
    await Product.delete(req.params.id);
    res.json({ message: "Ürün silindi" });
  } catch (error) {
    res.status(500).json({ message: "Ürün silinemedi", error });
  }
};
