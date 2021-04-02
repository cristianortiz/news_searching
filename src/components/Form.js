import React from "react";
import useSelect from "../hooks/useSelect";
import styles from "./Form.module.css";

const Form = ({ handleCategory }) => {
  //array to set custon hook initial state of select inputs data
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "bussines", label: "Bussines" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  //use the custom hook, initialState  will be 'general' category
  const [category, SelectNews] = useSelect("general", OPTIONS);

  //when user submit the form,
  const searchNews = (e) => {
    e.preventDefault();
    //the category is passed as state to app comp useState through handleCategory
    handleCategory(category);
  };

  return (
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Find News by Category</h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Search"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
