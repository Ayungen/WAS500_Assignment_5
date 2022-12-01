const mongoose = require("mongoose");
const BooksSchema = mongoose.Schema({
    _id: Number,
    title: String,
    description: String,
    author: String,
    image: String
});
module.exports = mongoose.model("Books", BooksSchema);
