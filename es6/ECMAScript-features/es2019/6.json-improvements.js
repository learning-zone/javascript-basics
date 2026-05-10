// JSON Superset
console.log(JSON.parse('"\u2028"')); // ''

// Well Formed JSON.Stringify
console.log(JSON.stringify("\uD800")); // '"\ud800"'