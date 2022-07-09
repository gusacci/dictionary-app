import React from "react";

const Example = (props) => {
  if (props.example) {
    return <div className="font-italic text-muted">{props.example}</div>;
  } else {
    return null;
  }
};

export default Example;
