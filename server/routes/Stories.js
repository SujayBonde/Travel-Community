// server/routes/stories.js

const express    = require('express');
const router     = express.Router();
const cloudinary = require('../config/cloudinary');    // if you have uploads
const upload     = require('../middleware/upload');     // if you have uploads
const Story      = require('../models/Story');

// GET all stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET stories by a specific user (matches fetchUserStories)
router.get('/user/:email', async (req, res) => {
  try {
    const stories = await Story.find({ author: req.params.email })
                               .sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new story (with optional image upload)
// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     let imageUrl = '';
//     if (req.file) {
//       const result = await cloudinary.uploader.upload_stream(
//         { folder: 'travel_stories' },
//         (error, result) => {
//           if (error) throw error;
//           imageUrl = result.secure_url;
//         }
//       ).end(req.file.buffer);
//     }

//     const { title, content, tags, author } = req.body;
//     const story = await Story.create({
//       title,
//       content,
//       imageUrl,
//       tags: tags ? tags.split(',').map(t => t.trim()) : [],
//       author
//     });
//     res.status(201).json(story);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// NEW: Accept JSON payload with imageUrl
router.post('/url', async (req, res) => {
  try {
    const { title, content, tags, author, imageUrl } = req.body;
    const story = await Story.create({
      title,
      content,
      author,
      tags,
      imageUrl
    });
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;