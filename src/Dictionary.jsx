import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

const Dictionary = () => {
  const [keyword, setKeyword] = useState();
  const [results, setResults] = useState(null);
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleResponse = (response) => {
    setResults(response.data[0]);
  };
  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  };
  return (
    <div>
      <form onSubmit={search}>
        <input type="text" onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
      <Results results={results} />
    </div>
  );
};

export default Dictionary;
