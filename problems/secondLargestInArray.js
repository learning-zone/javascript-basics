const secondLargest = (arr) => {
  //return arr.sort((a, b) => a - b)[arr.length -2];  // different solution
  let largest = -1;
  let secondLargest = -1;
  arr.forEach(el => {
    if (el > largest) {
      let temp = largest;
      largest = el;
      secondLargest = temp;
    } else if (el > secondLargest) {
      secondLargest = el;
    }
  });

  return secondLargest;
}

console.log(secondLargest([1,10,2,9]))  // 9
