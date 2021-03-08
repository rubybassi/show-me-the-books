import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookCard from "./BookCard";

const SearchForm = () => {
  const [userSearch, setUserSearch] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = async (e) => {
    if (userSearch.length < 3) return;
    e.preventDefault();
    const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}`;
    const response = await fetch(queryURL);
    const payload = await response.json();
    setBooks(payload.items || []);
    setUserSearch("");
  };

  const saveBook = (book) => {
    const newBook = {
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "https://picsum.photos/200/300",
      link: book.volumeInfo.previewLink,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
    };
    postBooks(newBook);
  };

  const postBooks = async (book) => {
    const queryURL = `/api/books`;
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    };
    const response = await fetch(queryURL, config);
    const payload = await response.json();
    console.log("book saved to db", payload);
  };

  return (
    <>
      <Form>
        <h2>Book Search</h2>
        <Form.Control
          className="mb-2 mr-sm-2"
          placeholder="enter title or author"
          size="lg"
          type="text"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <Button type="submit" className="mb-2" onClick={fetchBooks}>
          Search
        </Button>
      </Form>
      {books.length ? (
        <>
          <h5>Your Results</h5>
          <BookCard books={books} saveBook={saveBook} />
        </>
      ) : (
        <p>Your search results will appear below.</p>)}
    </>
  );
};

export default SearchForm;
