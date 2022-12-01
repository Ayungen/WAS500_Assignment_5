const Books = require("../model/books");

exports.getAllBooks = (req, res, next) => {
  Books.find({}, (error, Books) => {
    if (error) next(error);
    req.data = Books;
    next();
  });
};

exports.getOneBooks = (req, res, next) => {
  Books.findById(req.params, (error,Books) => {
      if (error) next(error);
      req.data = Books;
      next();
  });
};