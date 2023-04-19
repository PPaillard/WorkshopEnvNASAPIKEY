import React from "react";
import { PropTypes } from "prop-types";

function Picture({ picture }) {
  return (
    <figure>
      <img src={picture.url} alt={picture.title} />
      <figcaption>{picture.title}</figcaption>
    </figure>
  );
}

Picture.propTypes = {
  picture: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Picture;
