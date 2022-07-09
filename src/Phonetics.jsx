import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Phonetics = (props) => {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <p>{props.phonetic.text}</p>
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
        />
      </div>
    );
  } else {
    return <div> {props.phonetic.text}</div>;
  }
};

export default Phonetics;
