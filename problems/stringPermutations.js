const strPermutations = str => {
  if (str.length < 2) {
    return str; // This is our break condition
  }

  let permutations = []; // This array will hold our permutations

  for (let i = 0, len = str.length; i < len; i++) {
    let char = str[i];
    let remainingString = `${str.slice(0,i)}${str.slice(i+1)}`;
    for (let subPermutation of strPermutations(remainingString)) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}

console.log(strPermutations("abcd"));
// ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd",
//  "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]

// Permuation of an array

function permutation(input) {
  let outputs = [[input[0]]];
  for (let i = 1; i < input.length; i++) {
    let current = [];
    for (let j = 0; j < outputs.length; j++) {
      let base = outputs[j];
      for (let k = 0; k <= base.length; k++) {
        let temp = base.slice();
        temp.splice(k, 0, input[i]);
        current.push(temp);
      }
    }
    outputs = current;
  }
  return outputs;
}

console.log(permutation(["a", "b", "c", "d"]));
//[["d", "c", "b", "a"], ["c", "d", "b", "a"], ["c", "b", "d", "a"], ["c", "b", "a", "d"], ["d", "b", "c", "a"],
// ["b", "d", "c", "a"], ["b", "c", "d", "a"], ["b", "c", "a", "d"], ["d", "b", "a", "c"], ["b", "d", "a", "c"],
// ["b", "a", "d", "c"], ["b", "a", "c", "d"], ["d", "c", "a", "b"], ["c", "d", "a", "b"], ["c", "a", "d", "b"],
// ["c", "a", "b", "d"], ["d", "a", "c", "b"], ["a", "d", "c", "b"], ["a", "c", "d", "b"], ["a", "c", "b", "d"],
// ["d", "a", "b", "c"], ["a", "d", "b", "c"], ["a", "b", "d", "c"], ["a", "b", "c", "d"]]
