import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Example from "./Example";

const Meaning = (props) => {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="Meaning" key={index}>
            <p>{definition.definition}</p>

            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;
