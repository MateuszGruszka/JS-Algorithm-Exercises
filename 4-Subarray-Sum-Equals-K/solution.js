var subarraySum = function(nums, k) {
    let sum = 0;
    let result = 0;
    let preSum = {0: 1}
        
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (preSum[sum - k]) {
            result += preSum[sum - k];
        }
        
        preSum[sum] = (preSum[sum] ? preSum[sum] : 0) + 1;
    }
    
    return result;
}