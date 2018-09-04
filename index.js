const express = require('express');
const app     = express();
const path    = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});


