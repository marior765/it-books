const mongoose = require('mongoose');
const cors = require('cors');

const Book = mongoose.model('books');

module.exports = (app) => {
    app.get('/save/:id', cors(), function(req,res) {
        const id = req.params.id;
        var savedata = new Book({
          'ID': id
        }).save(function(err, result) {
          if (err) throw err;
          if(result) {
            res.json(result)
          }
        })
        res.send('Book saved!');
      });
      
      app.get('/data/:id', cors(), function(req, res) {
        const id = req.params.id;
        Book.findOne({
          'ID': id
        }, function(err, result) {
          if (err) throw err;
          if (result) {
            res.json(result)
          } else {
            res.send(JSON.stringify({
              error : 'Error'
            }))
          }
        })
      })

      app.get('/data', cors(), function(req, res) {
        Book.find({}, function(err, result) {
          if (err) throw err;
          if (result) {
            res.json(result)
          } else {
            res.send(JSON.stringify({
              error : 'Error'
            }))
          }
        })
      })
}