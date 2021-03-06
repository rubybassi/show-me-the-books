const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

//api/books (get) - Should return all saved books as JSON.
router.get("/api/books", async (req, res) => {
try {
  const allBooks =  await Book.find();
  //res.send({message: "it works"});
  res.status(200).json(allBooks);
} catch (err) {
  res.status(404).json(err);
}
});

//api/books (post) - Will be used to save a new book to the database.
router.post("/api/books", async ({body}, res) => {
try {
  const savedBook = await Book.create(body);
  console.log('data posted and this is the results from create', savedBook);
  res.status(200).json(savedBook);
} catch (err) {
  res.status(404).json(err);
}
}); 

//api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
router.delete("/api/books/:id", async(req, res) => {
  const id = req.params.id; 
  try {
    const queriedBook = await Book.findById({_id: id});
   //await console.log('deleted', queriedBook);
    const deletedBook = await queriedBook.remove();
    res.status(200).json(deletedBook);
  } catch (err) {
    res.status(404).json(err);
  }
  });  

module.exports = router;