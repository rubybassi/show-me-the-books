import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Container from "react-bootstrap/Container";

const Search = () => {
  return (
    <div>
      <Header />
      <Container>
        <SearchForm />
      </Container>
    </div>
  );
};

export default Search;
