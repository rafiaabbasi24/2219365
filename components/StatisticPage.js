const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use('/', urlRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));