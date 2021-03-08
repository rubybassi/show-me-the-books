import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BookCard = ({ books, saveBook }) => {
  return (
    <Container>
      <Row>
        <Col>
          {books.map((book) => (
            <div key={book.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img className="cardImage card-img" alt="book cover" src={ book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://picsum.photos/200/300"
                    }
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-text">
                      Written by:{" "}
                      {book.volumeInfo.authors &&
                      book.volumeInfo.authors.length > 1
                        ? book.volumeInfo.authors.join(", ")
                        : book.volumeInfo.authors}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{book.volumeInfo.publishedDate}</small>
                    </p>
                    <p className="card-text">{book.volumeInfo.description}</p>
                    <a href={book.volumeInfo.previewLink} className="btn btn-secondary">view on Google Books</a>{' '}
                    <Button variant="success" onClick={() => saveBook(book)}>save book</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BookCard;
