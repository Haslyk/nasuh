const db = require("../config/db");
const { comparePassword, generateToken } = require("../utils/auth");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM admins WHERE username = ?", [
      username,
    ]);
    const admin = rows[0];

    if (!admin) {
      return res
        .status(401)
        .json({ message: "Kullanıcı adı veya şifre hatalı" });
    }

    const isMatch = await comparePassword(password, admin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Kullanıcı adı veya şifre hatalı" });
    }

    const token = generateToken(admin.id);
    res.json({ message: "Giriş başarılı", token });
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası", error });
  }
};
