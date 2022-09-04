const  sortArrayByOrder = (orderId, array, orderType) => {
  let sortedArray = [];

  sortedArray = array.sort((a, b) => {
    let first = a[orderId].toLowerCase();
    let second = b[orderId].toLowerCase();
    if(orderId == 3 ){      
      first = Date.parse(DateConverter(first))
      second = Date.parse(DateConverter(second))      
    }
    switch (orderType) {
      case "DESC":
        if (first < second) {
          return 1;
        } else if (first > second) {
          return -1;
        }
        return 0;
      case "ASC":
        if (first < second) {
          return -1;
        } else if (first > second) {
          return 1;
        }
        return 0;

      default:
        break;
    }
  });
  return sortedArray;
};

const DateConverter = (x) => {
  let parsedList = x.split("/")
  let convertedDate =[ parsedList[1], parsedList[0],parsedList[2]].join('/')
  return convertedDate
}
export default sortArrayByOrder