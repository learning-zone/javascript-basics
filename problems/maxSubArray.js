const maxSubArray = (nums) => {
    let currentSum = 0;
    return nums.reduce((acc, item) => {
        currentSum = Math.max(currentSum+item, 0);
        return Math.max(acc, currentSum)
    }, 0);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  // 6
console.log(maxSubArray([4,-1,3,1]))  // 7
