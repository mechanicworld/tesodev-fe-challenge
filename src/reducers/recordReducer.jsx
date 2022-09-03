export default function recordReducer(state, action) {
  switch (action.type) {
    case "ADD_RECORD":
      
      return {
        ...state,
        records: action.value,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.value,
      };
    case "UPDATE_FILTERED_RECORD":
      return {
        ...state,
        filteredRecords: action.value,
      };
    case "UPDATE_ORDER":
      return {
        ...state,
        orderById: action.value,
      };
    case "UPDATE_PAGE_LIST":
      return {
        ...state,
        pageList: action.value,
      };

      case "SET_CURRENT_PAGE":
        return {
          ...state,
          currentPage: action.value,
        };
    case "INCREASE_CURRENT_PAGE":
      
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "DECREASE_CURRENT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
    console.log("Action not recognized")
  }
}
