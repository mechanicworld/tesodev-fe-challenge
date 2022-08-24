import React from "react";
import Button from "../utils/Buttons/Button/Button";
import style from "./SearchBar.module.scss";
import searchIcon from "../../assets/img/search-icon.svg";

function SearchBar() {
  return (
    <div className={style.container}>
      <div className={style.container}>
        <img className={style.searchIcon} src={searchIcon} alt="search-icon" />
        <input placeholder="Test" className={style.searchBar} type="text" />
      </div>
      <Button buttonName={"Search"} />
    </div>
  );
}

export default SearchBar;
