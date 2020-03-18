"use strict";
class Node {
  constructor(value){
    this.value = value;
    this.left = this.right = null;
  }
}
const sortedArrayToBST = (nums) => {
   let sortedArrayToBSTRec = (nums, start, end) => {
     if (start > end) {
       return null
     }
     let mid = Math.floor((start + end) / 2)
     let root = new Node(nums[mid])
     root.left = sortedArrayToBSTRec(nums, start, mid - 1)
     root.right = sortedArrayToBSTRec(nums, mid + 1, end)
     return root
   }
   return sortedArrayToBSTRec(nums, 0, nums.length - 1)
};

console.log(sortedArrayToBST([1,2,3,4,5,6,7]))
