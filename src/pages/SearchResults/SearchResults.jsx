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
  const [dropDownOn, setDropDownOn] = useState(0);

  const {
    columns,
    records,
    search,
    searchCategoryId,
    filteredRecords,
    orderByList,
    orderById,
    currentPage,
    pageList,
    dispatch,
  } = useRecords();
  let navigate = useNavigate();
  const orderDropDown = useRef(null);
  const orderBox = useRef(null);
  const handleSearchList = useCallback(
    (e) => {
      e.preventDefault();
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

    setDropDownOn((x) => !x);
    dispatch({
      type: "UPDATE_ORDER",
      value: index,
    });
  };

  const navigateSearchResult = (e) => {
    e.preventDefault();
    navigate("../search-results");
  };
  const navigateAddRecords = (e) => {
    e.preventDefault();
    navigate("../add-records");
  };
  const navigateHome = (e) => {
    e.preventDefault();
    navigate("../");
  };

  useEffect(() => {
    if (records != undefined) {
      let filtered = records?.filter((record) => {
        if (
          record[searchCategoryId].toLowerCase().includes(search.toLowerCase())
        ) {
          return record;
        }
      });
      let type = [1, 3].includes(orderById) ? "DESC" : "ASC";
      let order = [0, 1].includes(orderById) ? 0 : 3;
      let ordered = sortArrayByOrder(order, filtered, type);

      dispatch({
        type: "UPDATE_FILTERED_RECORD",
        value: ordered,
      });
      dispatch({
        type: "UPDATE_PAGE_LIST",
        value: [...Array(Math.ceil(ordered.length / 5)).keys()],
      });
    }
  }, [search, orderById]);

  const styleCondition = (categoryId) =>
    searchCategoryId == categoryId
      ? style.searchBarListSearchedItem
      : style.searchBarListItem;

 
  return (
    <div  className={style.page}>
      <div className={style.topContainer}>
        <img style={{cursor:"pointer"}} onClick={navigateHome} src={image} alt="tesodev"  />
        <SearchBox
          handleSearchList={handleSearchList}
          navigateSearchResult={navigateSearchResult}
          search={search}
        />
        <Button onClick={navigateAddRecords} buttonName={"Add new record"} />
      </div>
      <div className={style.resultContainer}>
        <div className={style.resultListContainer}>
          <div className={style.resultList}>
            <ul className={style.listBox}>
              {filteredRecords?.length > 0 ? (
                filteredRecords
                  ?.slice(currentPage * 5, (currentPage + 1) * 5)
                  .map((res, index) => {
                    return (
                      <div key={index}>
                        <li className={style.listItem}>
                          <div className={style.listItemInsideBox}>
                            <div className={style.listItemFirstLine}>
                              <span className={styleCondition(0)}>
                                {res[0]}
                              </span>
                              <span> - </span>
                              <span className={styleCondition(1)}>
                                {res[1]}
                              </span>
                              <span
                                className={`${styleCondition(3)} ${
                                  style.floatR
                                }`}
                              >
                                {res[3]}
                              </span>
                            </div>
                            <div>
                              <div
                                className={`${styleCondition(4)} ${
                                  style.floatL
                                }`}
                              >
                                {res[2]}
                              </div>
                              <div
                                className={`${styleCondition(5)} ${
                                  style.floatR
                                }`}
                              >
                                {res[4]} <span>-</span> {res[5]}
                              </div>
                            </div>
                          </div>
                        </li>
                        <div className={style.seperatorLine}></div>
                      </div>
                    );
                  })
              ) : (
                <div>
                  <p className={style.notFound}>No records found with -{search}-</p>
                </div>
              )}
            </ul>
          </div>
          {pageList?.length > 0 && filteredRecords?.length > 3 && (
            <div className={style.paginationBox}>
              <PaginationBar />
            </div>
          )}
        </div>
        <div ref={orderBox} className={style.orderBox}>
          <button className={style.sortButton} onClick={handleDropDownList}>
            <img src={sortIcon} alt="" />
            Order By
          </button>
          {dropDownOn == 1 && (
            <div ref={orderDropDown} className={style.dropDownBox}>
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
