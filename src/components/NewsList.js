import React from "react";
import SingleNew from "./SingleNew";
import PropTypes from "prop-types";

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((singleNew) => (
        <SingleNew key={singleNew.url} news={singleNew} />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};
export default NewsList;
