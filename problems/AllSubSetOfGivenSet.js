const getAllSubset = arr => 
  arr.reduce((subsets, value) =>
    subsets.concat(subsets.map(set => [value, ...set]))
  , [[]]
);

console.log(getAllSubsets([1,2,3])); // [[], [1], [2], [2, 1], [3], [3, 1], [3, 2], [3, 2, 1]]
