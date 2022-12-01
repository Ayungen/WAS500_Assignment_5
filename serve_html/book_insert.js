const express = require('express');
const app = express();

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
Books.create(
    {
        _id: 1,
        title: '1984',
        description: 'Summary: A man loses his identity while living under a repressive regime. In a story based on George Orwells classic novel, Winston Smith (John Hurt) is a government employee whose job involves the rewriting of history in a manner that casts his fictional countrys leaders in a charitable light. His trysts with Julia (Suzanna Hamilton) provide his only measure of enjoyment, but lawmakers frown on the relationship -- and in this closely monitored society, there is no escape from Big Brother',
        author: 'George Orwell',
        image: '../public/image/1984_L.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );

 Books.create(
    {
        _id: 2,
        title: 'Alchemist',
        description: 'Summary: The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life.',
        author: 'Paulo Coelho',
        image: '../public/image/Alchemist_L.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );



 Books.create(
    {
        _id: 3,
        title: 'The_Great_Gatsbyt',
        description: 'Summary: Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraways interactions with mysterious millionaire Jay Gatsby and Gatsbys obsession to reunite with his former lover, Daisy Buchanan',
        author: 'F. Scott Fitzgerald',
        image: '../public/image/The_Great_Gatsby_L.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );
