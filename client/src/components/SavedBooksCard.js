import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const queryURL = "/api/books";
    const fetchBooks = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      setBooks(payload || []);
    };
    fetchBooks();
  },[]);

  const deleteBook = async (id) => {
    setBooks(books.filter((book) => book._id !== id));
    const queryURL = `/api/books/${id}`;
    const config = {
      method: "DELETE",
    };
    const response = await fetch(queryURL, config);
    const payload = await response.json();
    console.log("book deleted to db", payload);
  };

  return (
    <Container>
      <Row>
      <h4>Saved Books</h4>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img className="cardImage card-img" alt="book cover" src={ book.image ? book.image : "https://picsum.photos/200/300"}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                      Written by:{" "}
                      {book.authors && book.authors.length > 1
                        ? book.authors.join(", ")
                        : book.authors}
                    </p>
                    <p className="card-text">{book.description}</p>
                    <a href={book.link} className="btn btn-secondary">view on Google Books</a>{" "}
                    <Button variant="danger" onClick={() => deleteBook(book._id)}>delete book</Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Looks like you haven't saved any books yet. When you save your favourite books they will appear here.</p>
        )}
      </Row>
    </Container>
  );
};

export default BookCard;
