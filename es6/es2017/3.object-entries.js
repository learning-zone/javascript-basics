// Object argument
const countries = {
    IN: 'India',
    SG: 'Singapore',
}
Object.entries(countries) // [["IN", "India"], ["SG", "Singapore"]]

// Non-object argument
const countriesArr = ['India', 'Singapore'];
console.log(Object.entries(countriesArr)); // [ ['0', 'India'], ['1', 'Singapore']]

const country = 'India';
console.log(Object.entries(country)); // [["0", "I"], ["1", "n"], ["2", "d"], ["3", "i"], ["4", "a"]]

console.log(Object.entries(100)); // [], an empty array for any primitive type because it won't have any own properties