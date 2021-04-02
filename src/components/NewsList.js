import React from "react";
import SingleNew from "./SingleNew";

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((singleNew) => (
        <SingleNew key={singleNew.url} news={singleNew} />
      ))}
    </div>
  );
};

export default NewsList;
