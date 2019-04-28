var rotate = function(nums, k) {
    let x = 0
    //Swap the values
    while(x < k) {
        let c = nums.pop();
        nums.unshift(c);
        x++;
    }  
};