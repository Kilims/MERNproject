var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//APIS
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');

var Books = require('./models/books.js');

//----->>  Post BOOKs  <<-----
app.post('/books', function(req, res) {
  var book = req.body;
  Books.create(book, function(err, books) {
    if (err) {
      throw err;
    } 
    res.json(books);
  });
});

//----->>  Get BOOKs  <<-----
app.get('/books', function(req, res) {
  Books.find(function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books)
  });
});

//----->>  Delete BOOKs  <<-----
app.delete('/books/:_id', function(req, res) {
  var query = {_id: req.params._id};

  Books.remove(query, function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});


//----->>  Update BOOKs  <<-----
app.put('/books/:_id', function(req, res) {
  var book = req.body;
  var query = req.params._id;

  var update = {
    '$set':{
      title: book.title,
      description:book.description,
      images: book.images,
      price: book.price
    }
  };

  var options = {new: true};

  Books.findOneAndUpdate(query, update, options, function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  })
})

app.listen(3001, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("API server is running on http://localhost:3001");
})