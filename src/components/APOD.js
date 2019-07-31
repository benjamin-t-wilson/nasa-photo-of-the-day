import React from "react";

const APOD = function(props) {
  return (
    <div className="nasaCard">
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <img src={props.url} alt="NASA Pic Of The Day" />
      <p>{props.explanation}</p>
      <p className="copyRight">{props.copyright}</p>
    </div>
  );
};
export default APOD