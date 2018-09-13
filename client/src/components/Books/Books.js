import React from 'react'
const mongoose = require('mongoose');

const Book = mongoose.model('books');

const Books = () => {
    return (
        <div>
            <h1>Books</h1>
        </div>
    )
} 

export default Books;