import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

const Meaning = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="Meaning" key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
            </p>

            <p>
              {" "}
              <em>
                <strong>Example:</strong>
                {definition.example}
              </em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;
