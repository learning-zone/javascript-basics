const median = (arr) => {
  if (!Array.isArray(arr)) {
    return null; // or throw error;
  }
  if (arr.length === 0) {
    return null;
  }

  let cloneArr = arr.slice();
  let sortedArr = cloneArr.sort((a, b) => a - b);

  let mid = Math.floor((0, sortedArr.length - 1) / 2);
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[mid] + sortedArr[mid + 1]) / 2;
  }
  return sortedArr[mid];
};


let arr = [3,8,9,1,5,7,9,21];
console.log(median(arr)); // 7.5

let arr1 = [1,2,4,3,5];
console.log(median(arr1)); // 3
