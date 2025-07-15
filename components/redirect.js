const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const shortid = require('shortid');

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = shortid.generate();
  
  try {
    let url = new Url({
      longUrl,
      shortCode
    });
    await url.save();
    res.json({ shortUrl: `http://localhost:3000/${shortCode}` });
  } catch (err) {
    res.status(500).json('Server error');
  }
});
router.get('/:shortCode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    res.status(500).json('Server error');
  }
});
module.exports = router;