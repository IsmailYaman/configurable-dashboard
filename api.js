const express = require('express');
const app = express();
const port = 3333;

// Set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
  next();
});

// Define an array to store the data
let data = [];

// Generate 100 rows of data with realistic values
for (let i = 0; i < 100; i++) {
  // Generate a random timestamp between January 1, 2021 and December 31, 2021
  const timestamp = new Date(2021, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31) + 1).toISOString();
  
  // Generate a random temperature between 20°C and 25°C
  const temperature = (Math.random() * 5 + 20).toFixed(1);
  
  // Generate a random humidity between 40% and 60%
  const humidity = (Math.random() * 20 + 40).toFixed(1);
  
  // Generate a random carbon dioxide level between 400 ppm and 1000 ppm
  const carbondioxide = Math.floor(Math.random() * 601) + 400;
  
  // Push the values to the data array
  data.push({
    timestamp,
    temperature,
    humidity,
    carbondioxide
  });
}

// Define a route that returns the data in JSON format
app.get('/', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => console.log(`Express app running on port ${port}!`));
