import React, { useEffect, useState } from "react";
import { useRecords } from "../../context";
import style from "./PaginationBar.module.scss";

function PaginationBar() {
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
  // const [pageList, setList] = useState([
  //   ...Array(Math.ceil(filteredRecords.length / 5)).keys(),
  // ]);

  const pageIncrease = (e) => {
    e.preventDefault();
    if (currentPage != pageList.length - 1) {
      dispatch({
        type: "INCREASE_CURRENT_PAGE",
      });
    }
  };

  const pageDecrease = (e) => {
    e.preventDefault();
    if (currentPage != 0) {
      dispatch({
        type: "DECREASE_CURRENT_PAGE",
      });
    }
  };
  const setCurrentPage = (e, index) => {
    e.preventDefault();
    dispatch({
      type: "SET_CURRENT_PAGE",
      value: index,
    });
  };
  return (
    <div className={style.paginationBarBox}>
      <button
        disabled={currentPage == 0}
        onClick={pageDecrease}
        className={style.prevButton}
      >
        Previous
      </button>
     
        {pageList?.length > 0 && pageList?.length > 6
          ? // Page List > 6
            [0, 1, 2].includes(currentPage)
            ? pageList
                .slice(0, 3)
                .concat(["..."], pageList.slice(-3))
                .map((button, index) => {
                  return typeof button == "string" ? (
                    <button
                      key={index}
                      className={`${style.pageNumbers} ${
                        button == currentPage && style.currentPage
                      }`}
                    >
                      {button}
                    </button>
                  ) : (
                    <button
                      onClick={(e) => setCurrentPage(e, button)}
                      key={index}
                      className={`${style.pageNumbers} ${
                        button == currentPage && style.currentPage
                      }`}
                    >
                      {button + 1}
                    </button>
                  );
                })
            : pageList?.slice(currentPage).length > 6
            ? pageList
                .slice(currentPage - 2, currentPage + 1)
                .concat(["..."], pageList.slice(-3))
                .map((button, index) => {
                  return typeof button == "string" ? (
                    <button
                      key={index}
                      className={`${style.pageNumbers} ${
                        button == currentPage && style.currentPage
                      }`}
                    >
                      {button}
                    </button>
                  ) : (
                    <button
                      onClick={(e) => setCurrentPage(e, button)}
                      key={index}
                      className={`${style.pageNumbers} ${
                        button == currentPage && style.currentPage
                      }`}
                    >
                      {button + 1}
                    </button>
                  );
                })
            : pageList?.slice(-6).map((button, index) => {
                return (
                  <button
                    onClick={(e) => setCurrentPage(e, button)}
                    key={index}
                    className={`${style.pageNumbers} ${
                      button == currentPage && style.currentPage
                    }`}
                  >
                    {button + 1}
                  </button>
                );
              })
          : // Page List < 6
            pageList?.slice().map((button, index) => {
              return (
                <button
                  onClick={(e) => setCurrentPage(e, button)}
                  key={index}
                  className={`${style.pageNumbers} ${
                    button == currentPage && style.currentPage
                  }`}
                >
                  {button + 1}
                </button>
              );
            })}
      

      <button
        disabled={currentPage >= pageList?.length - 1}
        onClick={pageIncrease}
        className={style.nextButton}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationBar;
