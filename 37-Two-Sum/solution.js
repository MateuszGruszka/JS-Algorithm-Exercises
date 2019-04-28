var twoSum = function(nums, target) {
    let result = []
    
    let dict = {}  
    
    for(let i = 0; i<=nums.length-1; i++) {
    
        if(typeof(dict[target - nums[i]]) !== "undefined" ) {
           return [dict[target - nums[i]], i]
        } else {
            dict[nums[i]] = i;    
        }
    }
    return result;
};