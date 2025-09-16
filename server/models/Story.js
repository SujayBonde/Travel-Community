const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title:     { type: String, required: true },
  content:   { type: String, required: true },
  imageUrl:  { type: String },
  tags:      [String],
  author:    { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', StorySchema);