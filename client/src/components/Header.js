import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Show Me the Books</h1>
        <p>Search and Save your favourite books from Google Books Search Database</p>
      </Container>
    </Jumbotron>
  );
};

export default Header;
