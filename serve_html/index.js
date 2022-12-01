const express = require('express');
const app = express();
const BooksController = require("./controllers/booksController");
const mongoose = require ("mongoose");
mongoose.connect(
    "mongodb+srv://andy:anotherpassword@cluster0.jnfns2p.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
);

const db = mongoose.connection;
db.once("open", () => {
    console.log("Ah! connected to MongoDB using Mongoose!!");
});
const Books = require('./model/books.js');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public/image', express.static('./public/image'))

//ROUTES
//Index Page
app.get('/', (req, res) => {
    res.render('index');
})

//Books
app.get('/bookslist', (req, res) => {
    res.render('books');
})

app.get("/bookslist/:_id", BooksController.getOneBooks, (req, res) => {
    //res.send(req.data);
    res.render('temp', {books: req.data})
});


// Error Page
app.get("*", (req,res) => {
    res.render("error")
});

//Listen
app.listen(3000, function(req, res) {
    console.log("Connected on port:3000");
  });