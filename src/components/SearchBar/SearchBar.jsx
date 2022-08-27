import React, { useRef, useState, useEffect, useCallback } from "react";
import Button from "../utils/Buttons/Button/Button";
import style from "./SearchBar.module.scss";
import searchIcon from "../../assets/img/search-icon.svg";
import { useRecords } from "../../context/";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchModalOn, setSearchModalOn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const {
    columns,
    records,
    search,
    searchCategoryId,
    filteredRecords,
    dispatch,
  } = useRecords();
  let navigate = useNavigate();
  const searchInput = useRef();
  const styleCondition = (categoryId) =>
    searchCategoryId == categoryId
      ? style.searchBarListSearchedItem
      : style.searchBarListItem;

  const handleSearchList = useCallback(
    (e) => {
      e.preventDefault();
      // setSearchValue(e.target.value);
      dispatch({
        type: "SET_SEARCH",
        value: e.target.value,
      });
    },
    [search]
  );

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate('../search-results');
  };

  useEffect(() => {
    if (search.length >= 3) {
      setSearchModalOn(true);
      dispatch({
        type: "UPDATE_FILTERED_RECORD",
        value: records.filter((record, index) => {
          if (
            record[searchCategoryId]
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            return record;
          }
        }),
      });
    } else {
      setSearchModalOn(false);
    }
    return () => {};
  }, [search]);

  return (
    <div>
      <div className={style.container}>
        <img className={style.searchIcon} src={searchIcon} alt="search-icon" />
        <input
          onFocus={(e) => console.log(search)}
          onChange={handleSearchList}
          placeholder="Search"
          value={search}
          className={style.searchBar}
          type="text"
          ref={searchInput}
        />
        <Button buttonName={"Search"} />
      </div>
      <div>
        {searchModalOn && (
          <div className={style.modalBox}>
            <div>
              {filteredRecords.length > 0 ? (
                <ul>
                  {filteredRecords.slice(0, 3).map((res, index) => (
                    <li>
                      <div>
                        <div>
                          <span className={styleCondition(0)}>{res[0]}</span>
                          <span> - </span>
                          <span className={styleCondition(1)}>{res[1]}</span>

                          <span
                            className={`${styleCondition(3)} ${style.floatR}`}
                          >
                            {res[3]}
                          </span>
                        </div>
                        <div>
                          <div
                            className={`${styleCondition(4)} ${style.floatL}`}
                          >
                            {res[2]}
                          </div>
                          <div
                            className={`${styleCondition(5)} ${style.floatR}`}
                          >
                            {res[4]} <span>-</span> {res[5]}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>No results Found</div>
              )}
            </div>
            <div className={style.showMore} onClick={handleNavigate}>
              Show more...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
