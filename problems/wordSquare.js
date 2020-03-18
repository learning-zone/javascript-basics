const validWordSquare = (words) => {
  if (words == null || words.length === 0) {
    return false;
  }
  if (words.length !== words[0].length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== words[j][i]) {
        return false;
      }
    }
  }
  return true;
};

let arr = [
  ["b","a","l","l"],
  ["a","r","e","a"],
  ["r","e","a","d"],
  ["l","a","d","y"]
];

let arr1 = [
  ["a","b","c","d"],
  ["b","n","r","t"],
  ["c","r","m","y"],
  ["d","t","y","e"]
];


console.log(validWordSquare(arr)); // false
console.log(validWordSquare(arr1)); // true
