import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./css/header.css";

const Header = () => {
  return (
    <Jumbotron fluid className="jumbotron">
        <h1>Show Me the Books</h1>
        <h2>Search and Save your favourite books from Google Books Search Database</h2>
    </Jumbotron>
  );
};

export default Header;
