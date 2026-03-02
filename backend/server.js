const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const configRoutes = require("./src/routes/configRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const sliderRoutes = require("./src/routes/sliderRoutes");
const corporateRoutes = require("./src/routes/corporateRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const statRoutes = require("./src/routes/statRoutes");
const partnerRoutes = require("./src/routes/partnerRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/settings", configRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/corporate", corporateRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/stats", statRoutes);
app.use("/api/partners", partnerRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Bir şeyler ters gitti!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});
