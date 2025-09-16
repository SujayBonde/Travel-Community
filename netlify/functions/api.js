// netlify/functions/api.js

const serverless = require('serverless-http');
const express    = require('express');
const cors       = require('cors');
const mongoose   = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Import your existing routers
const storyRoutes  = require('../../server/routes/stories');
const threadRoutes = require('../../server/routes/threads');

app.use('/api/stories', storyRoutes);
app.use('/api/threads', threadRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).send('API is up and running!');
});

// Export the handler
module.exports.handler = serverless(app);
