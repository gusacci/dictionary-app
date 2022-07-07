import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

const Dictionary = () => {
  const [keyword, setKeyword] = useState();
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleResponse = (response) => {
    console.log(response);
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
    </div>
  );
};

export default Dictionary;
