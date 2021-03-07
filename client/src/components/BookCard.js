import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BookCard = ({ books, saveBook }) => {

  return (
      <Container>
        <Row>    
        {books.map((book) => (
          <Col key={book.id} >
          <Card style={{ width: "18rem" }}>
          <Card.Img style={{ height: '446px' }} className="cardImage" variant="top" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://picsum.photos/200/300"}/>
            <Card.Body>
              <Card.Title>{book.volumeInfo.title}</Card.Title>
              <Card.Title>Written by: {book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}</Card.Title>
              <Card.Text>{book.volumeInfo.description}</Card.Text>
              <a href={book.volumeInfo.previewLink}>view book</a>{" "}
              <Button variant="primary" onClick={() => saveBook(book)}>save book</Button>
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
