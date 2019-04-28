var moveZeroes = function(nums) {
    if(nums.length === 0) { return }
    
    let index = 0;
    
    for(let i=0; i<=nums.length-1; i++) {
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        }    
    }
    
    for(let i = index; i<=nums.length-1; i++) {
        nums[i] = 0;
    }
}