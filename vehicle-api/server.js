const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();

// 🔌 Connect to MongoDB
connectDB();

// 🌐 Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON

// 🖼 Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🌍 Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// 🚘 Vehicle API routes
app.use('/api/vehicles', vehicleRoutes);

// 🏠 Serve frontend index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
