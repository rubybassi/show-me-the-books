import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("intial savedbook render");
    const queryURL = "/api/books";
    const fetchBooks = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("response data", payload);
      setBooks(payload || []);
    };
    fetchBooks();
  }, []);

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book._id !== id));
    fetch("/api/books/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log("book deleted from db", res));
  };

  return (
    <Container>
      <Row>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="cardImage card-img"
                    src={
                      book.image ? book.image : "https://picsum.photos/200/300"
                    }
                  />
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
                    <a href={book.link} className="btn btn-primary">
                      view book
                    </a>{" "}
                    <Button
                      variant="danger"
                      onClick={() => deleteBook(book._id)}
                    >
                      delete book
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You do not have any books saved. Don't forget to save to your favourites!</p>
        )}
      </Row>
    </Container>
  );
};

export default BookCard;
