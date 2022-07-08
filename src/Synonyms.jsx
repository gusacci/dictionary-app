import React from "react";

const Synonyms = (props) => {
  console.log(props);
  if (props.synonyms.length >= 1) {
    return (
      <div>
        {" "}
        <strong>synonyms:</strong>
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
