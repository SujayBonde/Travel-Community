// server/routes/threads.js

const express = require('express');
const router  = express.Router();
const Thread  = require('../models/Thread');

// GET all threads
router.get('/', async (req, res) => {
  try {
    const threads = await Thread.find().sort({ createdAt: -1 });
    res.json(threads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET threads by a specific user (matches fetchUserThreads)
router.get('/user/:email', async (req, res) => {
  try {
    const threads = await Thread.find({ author: req.params.email })
                                .sort({ createdAt: -1 });
    res.json(threads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single thread by ID (with replies)
router.get('/:id', async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.json(thread);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new thread
router.post('/', async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const newThread = await Thread.create({ title, author, content });
    res.status(201).json(newThread);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST a reply to a thread
router.post('/:id/replies', async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });

    const { author, content } = req.body;
    thread.replies.unshift({ author, content });
    await thread.save();
    res.status(201).json(thread);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;