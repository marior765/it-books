const express = require('express');
const app     = express();
const path    = require('path');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');
require('./server/models/Book');

mongoose.connect(keys.mongoURI);

const port = 3030;

app.use(express.static(path.join(__dirname, 'client/public')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});


