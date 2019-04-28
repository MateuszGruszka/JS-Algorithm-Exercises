var merge = function(nums1, m, nums2, n) {
    
    let index = 0
    let tailIndex = nums1.length -1
  
    while(nums1[tailIndex] === 0 && index <= n-1) {
        nums1[tailIndex] = nums2[index];
        index++;
        tailIndex--;
    }
    
    
    nums1.sort((a,b) => {
        return a-b
    })
    
    return nums1
};