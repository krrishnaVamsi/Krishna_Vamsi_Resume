// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function WorkCard({ src, link, h3, p }) {
  return (
    <a href="">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <br></br>
      <h3>{h3}</h3>
      <br></br>
      <p>{p}</p>
    </a>
  );
}

export default WorkCard;
