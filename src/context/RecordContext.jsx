import {createContext, useContext, useReducer} from 'react'
import {recordReducer} from '../reducers'
import mockData from '../../mockData.json'
const RecordContext = createContext()

export const RecordProvider = ({children}) => {
  const [state, dispatch] = useReducer(recordReducer,{
    records: mockData.data,
    columns:mockData.cols,
    search:'',
    searchCategoryId:0,
    filteredRecords: mockData.data,
    orderByList:mockData.orderBy,
    orderById:0,
    currentPage:0,
    pageList:[...Array(Math.ceil(mockData.data.length / 5)).keys()]

  });

  const data = {
    ...state,
    dispatch
  }

  return (
    <RecordContext.Provider value={data}>
      {children}
    </RecordContext.Provider>
  )
}

export const useRecords = () => useContext(RecordContext)