import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookCard from "./BookCard";

const SearchForm = () => {
  const [userSearch, setUserSearch] = useState("");
  const [books, setBooks] = useState([]);

  //console.log("intial render");
  const fetchBooks = async (e) => {
      e.preventDefault();
      const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}`;
      console.log("button clicked");
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("response data", payload);
      setBooks(payload.items || []);
      console.log("books array after fetch", books);
      setUserSearch('');
  };

  const saveBook = (id) => {
    console.log('save book fn', id);
    
  };

  return (
    <>
      <Form>
        <h2>Book Search</h2>
        <Form.Label htmlFor="search">Book</Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="search"
          placeholder="enter search term"
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
        <h3>Your Results</h3>
        <BookCard books={books} saveBook={saveBook}/>
        </>
      ) : (
        <h3>Your results will appear here</h3>
      )}
    </>
  );
};

export default SearchForm;
