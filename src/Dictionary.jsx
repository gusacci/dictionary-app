import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

const Dictionary = () => {
  const [keyword, setKeyword] = useState();
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleResponse = (response) => {
    setResults(response.data[0]);
  };

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsKey = `563492ad6f917000010000011f2c9dccb24f4e75b318a27c0a08babd`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  };
  return (
    <div className="Dictionary">
      <div className="heading">
        <h1> Dictionary</h1>
        <form onSubmit={search}>
          <input type="text" onChange={handleKeywordChange} />
          <button type="submit">Search</button>
        </form>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
      <p className="footer">
        This project was coded by
        <a href="/" target="_blank" rel="noreferrer">
          Anastasia Gusak
        </a>
        and is open-sourced on{" "}
        <a
          href="https://github.com/gusacci/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </p>
    </div>
  );
};

export default Dictionary;
