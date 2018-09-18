const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    ID: Number,
    name: String,
    year: Number,
    language: String,
    audience: String,
    description: String,
    plus: String,
    minus: String,
    link: String
});

mongoose.model('books', BookSchema);

// const Book = mongoose.model('books');
// Book.create({name: 'C'});
// const result = Book.findOne({name: 'C'});
// console.log(result);
