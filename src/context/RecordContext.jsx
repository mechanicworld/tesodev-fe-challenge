import { createContext, useContext, useReducer } from "react";
import { recordReducer } from "../reducers";
import jsonData from "../../mockData.json";
const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  localStorage.setItem("mockData", JSON.stringify(jsonData));
  if (!localStorage.getItem("newRecords")) {
    localStorage.setItem("newRecords", JSON.stringify({ records: [] }));
  }
  const mockData = JSON.parse(localStorage.getItem("mockData"));
  const newRecords = JSON.parse(localStorage.getItem("newRecords")) || []

  const [state, dispatch] = useReducer(recordReducer, {
    records: mockData.data.concat(newRecords?.records || []),
    columns: mockData.cols,
    search: "",
    searchCategoryId: 0,
    filteredRecords: mockData.data.concat(newRecords?.records || []),
    orderByList: mockData.orderBy,
    orderById: 0,
    currentPage: 0,
    pageList: [...Array(Math.ceil(mockData.data.concat(newRecords?.records || [])?.length / 5)).keys()],
  });

  const data = {
    ...state,
    dispatch,
  };

  return (
    <RecordContext.Provider value={data}>{children}</RecordContext.Provider>
  );
};

export const useRecords = () => useContext(RecordContext);
