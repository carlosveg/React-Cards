import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card({ title, image, url, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={image} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quidem culpa porro voluptatibus itaque, ucimus quam exercitationem expedita quae esse natus odio labore dolorem vitae laudantium repellat, veritatis hic maiores."}
        </p>
        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
