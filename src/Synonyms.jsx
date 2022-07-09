import React from "react";

const Synonyms = (props) => {
  if (props.synonyms.length >= 1) {
    return (
      <div className="Synonyms">
        {" "}
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Synonyms;
