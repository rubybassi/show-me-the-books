import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./css/header.css";

const Header = () => {
  return (
    <Jumbotron fluid className="jumbotron">
        <h1>Show Me the Books</h1>
        <h2>Search and save your favourite books from Google Books database</h2>
    </Jumbotron>
  );
};

export default Header;
