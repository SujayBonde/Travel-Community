// server/models/Thread.js

const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
  author:   { type: String, required: true },
  content:  { type: String, required: true },
  createdAt:{ type: Date,   default: Date.now }
});

const ThreadSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  author:   { type: String, required: true },
  content:  { type: String, default: '' },
  replies:  [ReplySchema],
  createdAt:{ type: Date,   default: Date.now }
});

module.exports = mongoose.model('Thread', ThreadSchema);