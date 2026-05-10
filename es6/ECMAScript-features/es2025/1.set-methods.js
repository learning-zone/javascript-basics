// Set Methods - New in ES2025
// ES2025 introduces several new methods to the Set prototype that make working with sets more convenient

// Create some sample sets
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([3, 4, 5, 6, 7]);
const set3 = new Set([5, 6, 7, 8, 9]);

console.log("Original sets:");
console.log("set1:", [...set1]); // [1, 2, 3, 4, 5]
console.log("set2:", [...set2]); // [3, 4, 5, 6, 7]
console.log("set3:", [...set3]); // [5, 6, 7, 8, 9]

// 1. Set.prototype.union()
// Returns a new Set containing all elements from both sets
console.log("\n--- Set.prototype.union() ---");
const union = set1.union(set2);
console.log("set1.union(set2):", [...union]); // [1, 2, 3, 4, 5, 6, 7]

// Union with multiple sets
const multiUnion = set1.union(set2, set3);
console.log("set1.union(set2, set3):", [...multiUnion]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2. Set.prototype.intersection()
// Returns a new Set containing elements present in all sets
console.log("\n--- Set.prototype.intersection() ---");
const intersection = set1.intersection(set2);
console.log("set1.intersection(set2):", [...intersection]); // [3, 4, 5]

// Intersection with multiple sets
const multiIntersection = set1.intersection(set2, set3);
console.log("set1.intersection(set2, set3):", [...multiIntersection]); // [5]

// 3. Set.prototype.difference()
// Returns a new Set containing elements present in the first set but not in the second
console.log("\n--- Set.prototype.difference() ---");
const difference = set1.difference(set2);
console.log("set1.difference(set2):", [...difference]); // [1, 2]
console.log("set2.difference(set1):", [...set2.difference(set1)]); // [6, 7]

// 4. Set.prototype.symmetricDifference()
// Returns a new Set containing elements present in either set but not in both
console.log("\n--- Set.prototype.symmetricDifference() ---");
const symDifference = set1.symmetricDifference(set2);
console.log("set1.symmetricDifference(set2):", [...symDifference]); // [1, 2, 6, 7]

// 5. Set.prototype.isSubsetOf()
// Returns a boolean indicating if the set is a subset of the given set
console.log("\n--- Set.prototype.isSubsetOf() ---");
const subset = new Set([3, 4]);
console.log("subset:", [...subset]); // [3, 4]
console.log("subset.isSubsetOf(set1):", subset.isSubsetOf(set1)); // true
console.log("set1.isSubsetOf(subset):", set1.isSubsetOf(subset)); // false

// 6. Set.prototype.isSupersetOf()
// Returns a boolean indicating if the set is a superset of the given set
console.log("\n--- Set.prototype.isSupersetOf() ---");
console.log("set1.isSupersetOf(subset):", set1.isSupersetOf(subset)); // true
console.log("subset.isSupersetOf(set1):", subset.isSupersetOf(set1)); // false

// 7. Set.prototype.isDisjointFrom()
// Returns a boolean indicating if the set has no elements in common with the given set
console.log("\n--- Set.prototype.isDisjointFrom() ---");
const disjointSet = new Set([10, 11, 12]);
console.log("disjointSet:", [...disjointSet]); // [10, 11, 12]
console.log("set1.isDisjointFrom(disjointSet):", set1.isDisjointFrom(disjointSet)); // true
console.log("set1.isDisjointFrom(set2):", set1.isDisjointFrom(set2)); // false

// Practical example: Finding common interests between users
console.log("\n--- Practical Example: User Interests ---");
const user1Interests = new Set(["coding", "reading", "music", "hiking"]);
const user2Interests = new Set(["gaming", "music", "movies", "hiking"]);
const user3Interests = new Set(["travel", "photography", "hiking", "cooking"]);

// Find common interests between all users
const commonInterests = user1Interests.intersection(user2Interests, user3Interests);
console.log("Common interests among all users:", [...commonInterests]); // ["hiking"]

// Find unique interests of user1
const uniqueInterests = user1Interests.difference(user2Interests, user3Interests);
console.log("Unique interests of user1:", [...uniqueInterests]); // ["coding", "reading"]

// Find all interests across users
const allInterests = user1Interests.union(user2Interests, user3Interests);
console.log("All interests:", [...allInterests]);
// ["coding", "reading", "music", "hiking", "gaming", "movies", "travel", "photography", "cooking"]