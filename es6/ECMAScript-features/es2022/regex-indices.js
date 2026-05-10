const regexPatter = /(Jack)/gd;
const input = 'Authos: Jack, Alexander and Jacky';
const result = [...input.matchAll(regexPatter)];
console.log(result[0]); // ['Jack', 'Jack', index: 8, input: 'Authos: Jack, Alexander and Jacky', groups: undefined, indices: Array(2)]