import React, { useState, useEffect }from "react";
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
    setBooks(books.filter( book => book._id !== id));
    fetch('/api/books/' + id, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => console.log('book deleted from db', res));
  }

  return (
      <Container>
        <Row>    
        {books.map((book) => (
          <Col key={book._id} >
          <Card style={{ width: "18rem" }}>
          <Card.Img style={{ height: '446px' }} className="cardImage" variant="top" src={book.image ? book.image : "https://picsum.photos/200/300"}/>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Title>Written by: {book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}</Card.Title>
              <Card.Text>{book.description}</Card.Text>
              <a href={book.link}>view book</a>{" "}
              <Button variant="primary" onClick={() => deleteBook(book._id)}>delete book</Button>
            </Card.Body>
          </Card>
          </Col>
      ))}
      </Row>
      </Container>
  );
};

export default BookCard;

//              
