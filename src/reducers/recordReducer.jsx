export default function recordReducer(state, action){
  switch(action.type){
    case 'ADD_RECORD':
      return{
        ...state,
        records:action.value
      }
    case 'SET_SEARCH':
      return{
        ...state,
        search:action.value
      }
    case 'UPDATE_FILTERED_RECORD':
      return{
        ...state,
        filteredRecords:action.value
      }
  }
}