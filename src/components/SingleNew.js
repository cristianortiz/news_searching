import React from "react";
import PropTypes from "prop-types";

const SingleNew = ({ news }) => {
  //destructuring news object
  const { urlToImage, url, title, description, source } = news;

  //if the news have no image
  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}

        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light button"
          >
            See the full text
          </a>
        </div>
      </div>
    </div>
  );
};

SingleNew.propTypes = {
  news: PropTypes.object.isRequired,
};
export default SingleNew;
