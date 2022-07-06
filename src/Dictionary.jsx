import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState();
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  const search = (event) => {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
