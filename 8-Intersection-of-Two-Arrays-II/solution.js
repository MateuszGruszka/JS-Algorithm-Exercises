var intersect = function(nums1, nums2) {
    let result = [];
    let myDict = {};
    
    for(let i=0; i<=nums1.length-1; i++) {
        let value = nums1[i];
        myDict[value] = myDict[value] ? myDict[value]+1 : 1;
    }
    
    nums2.forEach(element => {
        if(myDict[element]) {
            result.push(element);
            myDict[element] -= 1;
        }
    })
    
    return result;
};