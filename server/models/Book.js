const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    ID: Number,
    name: String,
    year: Number,
    language: String,
    audience: String,
    discription: String,
    plus: String,
    minus: String
});

mongoose.model('books', BookSchema);
