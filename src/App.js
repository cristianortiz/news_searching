import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import useSelect from "./hooks/useSelect";
import axios from "axios";

function App() {
  //category useState hook, this state is asigned when the user submit the form
  const [category, handleCategory] = useState("");

  //news useState hook, this state is asigned after the useEffect succesfully request the API
  const [news, handleNews] = useState([]);

  /*  after the user submit the form the category state has a value; whit the useEffect hook
  if category state changes to another, the API is requested again to update search results */
  useEffect(() => {
    const requestAPI = async () => {
      const apiKey = "110369a631174a6998121d7c6bed2227";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      const response = await axios.get(url);
      //extracts the news from the API retrieved data and assign it to the news state hook
      handleNews(response.data.articles);
      console.log(response);
    };
    requestAPI();
  }, [category]); //useEffects depends on the state category value to request the API

  return (
    <Fragment>
      <Header title="Search News" />
      <div className="container white">
        <Form handleCategory={handleCategory} />
        <NewsList news={news} />
      </div>
    </Fragment>
  );
}

export default App;
