import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
  let [filter, setFilteredList] = useState(props.data);
  let [inputValue, setValue] = useState();
  let items = Object.values(props.data);
  const setInputValue = (e) => {
    setValue(e.target.value);
  };
  let filterList = (value) => {
    let filteredList = items.filter((element) => {
      return (
        String(element.id).search(value) !== -1 ||
        element.firstName.toLowerCase().search(value) !== -1 ||
        element.lastName.toLowerCase().search(value) !== -1 ||
        element.email.toLowerCase().search(value) !== -1 ||
        String(element.phone).search(value) !== -1
      );
    });
    setFilteredList(filteredList);
    props.searchData(filter);
  };

  return (
    <div className="content">
      <input
        className="search"
        placeholder="Поиск"
        onChange={setInputValue}
      ></input>
      <button
        onClick={() => {
          filterList(inputValue);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;