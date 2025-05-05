// Serverless function for Vercel
const express = require('express');
const { createServer } = require('http');
const { registerRoutes } = require('../dist/server/routes');

// Initialize Express app
const app = express();
app.use(express.json());

// Apply CORS for API requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Create HTTP server
const server = createServer(app);

// Register routes
registerRoutes(app).catch(err => {
  console.error('Error registering routes:', err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Export for Vercel
module.exports = app;