// Object argument
const countries = {
    IN: 'India',
    SG: 'Singapore',
}
Object.values(countries) // ['India', 'Singapore']

// Non-object argument
console.log(Object.values(['India', 'Singapore'])); // ['India', 'Singapore']
console.log(Object.values('India')); // ['I', 'n', 'd', 'i', 'a']