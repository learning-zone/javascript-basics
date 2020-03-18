const mergeIntervals = (arr) => {
  if (arr == null || arr.length < 2) {
    return arr;
  }

  arr.sort((a, b) => a[0] - b[0]);

  return arr.reduce((acc, cur) => {
    let last = acc.pop()
    if (last) {
      if (last[1] > cur[0])  {
        let newLast = [last[0], cur[1]];
        acc.push(newLast);
      } else {
        acc.push(last, cur);
      }
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
};

console.log(mergeIntervals( [[1,3],[2,6],[8,10],[15,18]]));  //[[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[1,4],[3,5],[2,4],[7,10]])); //  [[1, 5], [7, 10]]
