let obj = {
  "a": {
    "b": {
      "c": 12,
      "d": "Hello World",
      "e": null
    },
    "f": [1,2,3]
  }
};

const flatten = (obj, parentkey) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let val = obj[key];
      if (typeof val === "object" && !Array.isArray(val) && val != null) { // != will catch undefined or null
        let flat = flatten(val, key);
        if (parentkey) {
          for (let i in flat) {
            let k = `${parentkey}/${i}`;
            acc[k] = flat[i];
          }
        } else {
          acc = flat;
        }
      } else {
        let prop = parentkey ? `${parentkey}/${key}` : key;
        acc[prop] = val;
      }
    }
    return acc;
  }, {});
};


console.log(flatten(obj));

// {
//   a/b/c: 12,
//   a/b/d: "Hello World",
//   a/b/e: null,
//   a/f: [1, 2, 3]
// }
