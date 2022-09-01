import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRecords } from "../../context/";
import { useNavigate } from "react-router-dom";
import style from "./SearchResults.module.scss";
import image from "../../assets/img/tesodev-search-logo.png";
import SearchBox from "../../components/SearchBar/SearchBox/SearchBox";
import Button from "../../components/utils/Buttons/Button/Button";
import sortIcon from "../../assets/img/sort-icon.png";
import sortArrayByOrder from "../../components/utils/helpers/sortArrayByOrder";
import PaginationBar from "../../components/PaginationBar/PaginationBar";

function SearchResults() {
  const [dropDownOn, setDropDownOn] = useState(1);

  const {
    columns,
    records,
    search,
    searchCategoryId,
    filteredRecords,
    orderByList,
    orderById,
    dispatch,
  } = useRecords();
  let navigate = useNavigate();

  // const sortArrayByOrder2 = (orderId, array) => {
  //   let sortedArray = [];
  //   sortedArray = array.sort((a, b) => {
  //     let first = a[orderById];
  //     let second = b[orderById];
  //     if (first < second) {
  //       return -1;
  //     } else if (first > second) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // };
  // useEffect(() => {
  //   if (filteredRecords !== undefined) {
  //     let type = [1, 3].includes(orderById) ? "DESC" : "ASC";
  //     let order = [0, 1].includes(orderById) ? 0 : 3;
  //     let final = sortArrayByOrder(order, filteredRecords, type);
  //     console.log(final);
  //   }
  // }, [orderById]);

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
  const handleDropDownList = (e) => {
    e.preventDefault();
    setDropDownOn((x) => !x);
  };
  const handleOrderById = (e, index) => {
    e.preventDefault();
    console.log(index);
    setDropDownOn(x => !x)
    dispatch({
      type: "UPDATE_ORDER",
      value: index,
    });
  };

  const navigateSearchResult = (e) => {
    e.preventDefault();
    navigate("../search-results");
  };

  useEffect(() => {

    let filtered = records.filter((record, index) => {
      if (
        record[searchCategoryId].toLowerCase().includes(search.toLowerCase())
      ) {
        return record;
      }
    })
    let type = [1, 3].includes(orderById) ? "DESC" : "ASC";
    let order = [0, 1].includes(orderById) ? 0 : 3;
    let ordered = sortArrayByOrder(order, filtered, type);
    console.log(ordered)
    dispatch({
      type: "UPDATE_FILTERED_RECORD",
      value: ordered
    });
    // Add Filtered
    
  }, [search,orderById]);

  const styleCondition = (categoryId) =>
    searchCategoryId == categoryId
      ? style.searchBarListSearchedItem
      : style.searchBarListItem;

  return (
    <div className={style.page}>
      <div className={style.topContainer}>
        <img src={image} alt="tesodev" />
        <SearchBox
          handleSearchList={handleSearchList}
          navigateSearchResult={navigateSearchResult}
          search={search}
        />
        <Button buttonName={"Add new record"} />
      </div>
      <div className={style.resultContainer}>
        <div className={style.resultListContainer}>
          <div className={style.resultList}>
            <ul className={style.listBox}>
              {filteredRecords?.slice().map((res, index) => {
                return (
                  <>
                    <li key={index} className={style.listItem}>
                      <div className={style.listItemInsideBox}>
                        <div className={style.listItemFirstLine}>
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
                    <div className={style.seperatorLine}></div>
                  </>
                );
              })}
            </ul>
          </div>
          <div className={style.paginationBox}>
            <PaginationBar/>
          </div>
        </div>
        <div className={style.orderBox}>
          <button className={style.sortButton} onClick={handleDropDownList}>
            <img src={sortIcon} alt="" />
            Order By
          </button>
          {dropDownOn && (
            <div className={style.dropDownBox}>
              {orderByList && (
                <ul className={style.listBox}>
                  {orderByList.map((orderItem, index) => (
                    <li
                      key={index}
                      onClick={(e) => handleOrderById(e, index)}
                      className={`${
                        orderById === index && style.dropDownListItemSelected
                      } ${style.dropDownListItem} `}
                    >
                      {orderItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
