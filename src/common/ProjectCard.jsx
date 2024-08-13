// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function ProjectCard({ src, link, h3, p }) {
  return (
    <a href="">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
