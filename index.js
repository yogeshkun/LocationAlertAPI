const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Store the live location data
const locations = [];

// API to store live latitude and longitude
app.post('/api/location', (req, res) => {
  const { latitude, longitude } = req.body;
  
  // Add the new location data to the locations array
  locations.push({ latitude, longitude });

  res.status(200).json({
    message: "Location data received successfully!"
  });
});

// API to retrieve all the stored location data
app.get('/api/location', (req, res) => {
  res.status(200).json(locations);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
