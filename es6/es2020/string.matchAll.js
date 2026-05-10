const regex = /t(e)(st(\d?))/g;
const string = 'test1test2';
const matchesIterator = string.matchAll(regex);
Array.from(matchesIterator, result => console.log(result));  // ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
                                                                    //["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]