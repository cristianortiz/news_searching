import React from "react";
const SingleNew = ({ news }) => {
  const { urlToImage, url, title, description } = news;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <img src={urlToImage} />
        <div className="card-content">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleNew;
