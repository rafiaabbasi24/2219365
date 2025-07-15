const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortCode: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Url', urlSchema);