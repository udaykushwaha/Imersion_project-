const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 📁 Multer Storage Setup with Sanitization
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const sanitizedName = file.originalname.replace(/[^\w.-]/gi, '_');
    const uniqueName = `${Date.now()}-${sanitizedName}`;
    cb(null, uniqueName);
  }
});

// ✅ File Filter (Images only)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error('❌ Only image files (jpeg/jpg/png/gif/webp) are allowed!'));
  }
};

// ✅ Multer middleware
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // Optional: limit to 5MB
  },
});

// 🔧 Routes

// ➕ Create vehicle (with image)
router.post('/', upload.single('image'), vehicleController.createVehicle);

// 📥 Get all vehicles
router.get('/', vehicleController.getVehicles);

// 🔎 Get single vehicle
router.get('/:id', vehicleController.getVehicleById);

// ✏️ Update vehicle (image optional)
router.put('/:id', upload.single('image'), vehicleController.updateVehicle);

// ❌ Delete vehicle
router.delete('/:id', vehicleController.deleteVehicle);

// 🔐 Optional: handle multer errors more gracefully
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message.includes('image')) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

module.exports = router;
