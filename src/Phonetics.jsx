import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Phonetics = (props) => {
  if (props.phonetic.audio) {
    return (
      <div>
        {props.phonetic.text}
        <br />
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Phonetics;
